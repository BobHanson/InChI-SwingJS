/*
 * International Chemical Identifier (InChI)
 * Version 1
 * Software version 1.07
 * April 30, 2024
 *
 * MIT License
 *
 * Copyright (c) 2024 IUPAC and InChI Trust
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*
* The InChI library and programs are free software developed under the
 * auspices of the International Union of Pure and Applied Chemistry (IUPAC).
 * Originally developed at NIST.
 * Modifications and additions by IUPAC and the InChI Trust.
 * Some portions of code were developed/changed by external contributors
 * (either contractor or volunteer) which are listed in the file
 * 'External-contributors' included in this distribution.
 *
 * info@inchi-trust.org
 *
*/

#include <string.h>

#include "mode.h"
#include "ichimain.h"
#include "ichimake.h"
#include "ichi_io.h"

#include "bcf_s.h"

/*

Generate substrings of whole-structure InChI/AuxInfo

*/


/****************************************************************************
  Produce Hill formula substring of the whole structure InChI string
****************************************************************************/
int str_HillFormula( INCHI_SORT       *pINChISort,
                     INCHI_IOS_STRING *strbuf,
                     int               *bOverflow,
                     int               bOutType,
                     int               num_components,
                     int               bUseMulipliers )
{
    int          i, ii, nUsedLength0;
    INCHI_SORT   *is, *is0;
    INChI        *pINChI, *pINChI_Prev;
    int          mult, eq2prev, bNext;

    nUsedLength0 = strbuf->nUsedLength;

    if (!( is0 = pINChISort ))
    {
        return nUsedLength0;
    }
    i = 0;
    pINChI_Prev = ( 0 <= ( ii = GET_II( bOutType, is0 ) ) ) ? is0->pINChI[ii] : NULL;
    mult = 0;
    bNext = 0;

    /* For each connected component */
    for (i++; i <= num_components; i++)
    {

        pINChI = ( i < num_components &&
            ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) )
            ? is->pINChI[ii]
            : NULL;

        eq2prev = bUseMulipliers &&
            pINChI &&
            pINChI_Prev &&
            pINChI->szHillFormula &&
            pINChI_Prev->szHillFormula &&
            pINChI->szHillFormula[0] &&
            !strcmp( pINChI_Prev->szHillFormula, pINChI->szHillFormula );

        if (eq2prev)
        {
            mult++; /* mult = (number of non-empty equal items)-1 */
            continue;
        }
        else
        {
            int ok;
            if (bNext++)
            {
                MakeDelim( ".", strbuf, bOverflow );
            }

            ok = pINChI_Prev &&
                pINChI_Prev->szHillFormula &&
                pINChI_Prev->szHillFormula[0];

            if (ok)
            {
                MakeMult( mult + 1, "", strbuf, 0, bOverflow );
                MakeHillFormulaString( pINChI_Prev->szHillFormula,
                    strbuf,
                    bOverflow );
            }
        }
        pINChI_Prev = pINChI;
        mult = 0; /* we do not know whether the item is empty */
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce Hill formula substring of the whole structure InChI string:
  2nd appearance (FixedH).
****************************************************************************/
int str_HillFormula2( INCHI_SORT       *pINChISort,     /* non-taut */
                      INCHI_SORT       *pINChISort2,    /* taut     */
                      INCHI_IOS_STRING *strbuf,
                      int              *bOverflow,
                      int              bOutType,
                      int              num_components,
                      int              bUseMulipliers )
{
    int          i, ii, ii2, nUsedLength0;
    INCHI_SORT   *is, *is2, *is0, *is20;
    INChI        *pINChI, *pINChI_Prev, *pINChI_Taut, *pINChI_Taut_Prev;
    int          mult, eq2prev, bNext, bEqToTaut;

    is = NULL;
    is2 = NULL;
    is0 = pINChISort;
    is20 = pINChISort2;
    i = 0;
    nUsedLength0 = strbuf->nUsedLength;

    pINChI_Prev = ( 0 <= ( ii = GET_II( bOutType, is0 ) ) ) ? is0->pINChI[ii] : NULL;
    pINChI_Taut_Prev = ( 0 <= ( ii2 = GET_II( OUT_T1, is20 ) ) ) ? is20->pINChI[ii2] : NULL;
    mult = 0;
    bNext = 0;
    bEqToTaut = 1;
    bEqToTaut = bEqToTaut                 &&
        pINChI_Prev                       &&
        pINChI_Taut_Prev &&
        !pINChI_Taut_Prev->bDeleted       &&
        pINChI_Prev->szHillFormula        &&
        pINChI_Taut_Prev->szHillFormula   &&
        !strcmp( pINChI_Prev->szHillFormula, pINChI_Taut_Prev->szHillFormula );

    /* For each connected component    */
    for (i++; i <= num_components; i++)
    {
        pINChI = ( i < num_components && ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) ) ? is->pINChI[ii] : NULL;
        pINChI_Taut = ( i < num_components && ( is2 = is20 + i, 0 <= ( ii2 = GET_II( OUT_T1, is2 ) ) ) ) ? is2->pINChI[ii2] : NULL;
        if (bEqToTaut && ( pINChI || pINChI_Taut ))
        {
            bEqToTaut = pINChI && pINChI_Taut && !pINChI_Taut->bDeleted &&
                pINChI->szHillFormula && pINChI_Taut->szHillFormula     &&
                !strcmp( pINChI->szHillFormula, pINChI_Taut->szHillFormula );
        }

        eq2prev = bUseMulipliers        &&
            pINChI && pINChI_Prev       &&
            pINChI->szHillFormula       &&
            pINChI_Prev->szHillFormula  &&
            pINChI->szHillFormula[0]    &&
            !strcmp( pINChI_Prev->szHillFormula, pINChI->szHillFormula );

        if (eq2prev)
        {
            mult++; /* mult = (number of non-empty equal items)-1 */
            continue;
        }
        else
        {
            if (bNext++)
            {
                MakeDelim( ".", strbuf, bOverflow );
            }
            if (pINChI_Prev && pINChI_Prev->szHillFormula && pINChI_Prev->szHillFormula[0])
            {
                MakeMult( mult + 1, "", strbuf, 0, bOverflow );
                MakeHillFormulaString( pINChI_Prev->szHillFormula, strbuf, bOverflow );
            }
        }
        pINChI_Prev = pINChI;
        mult = 0; /* we do not know whether the item is empty */
    }

    if (bEqToTaut)
        strbuf->nUsedLength = nUsedLength0;

    {
        strbuf->pStr[strbuf->nUsedLength] = '\0';
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce connections substring of InChI string for the whole structure
****************************************************************************/
int str_Connections( CANON_GLOBALS    *pCG,
                     INCHI_SORT       *pINChISort,
                     INCHI_IOS_STRING *strbuf,
                     int              *bOverflow,
                     int              bOutType,
                     int              ATOM_MODE,
                     int              num_components,
                     int              bUseMulipliers )
{
    int          i, ii, nUsedLength0;
    INCHI_SORT   *is, *is0;
    INChI        *pINChI, *pINChI_Prev;
    int          mult, eq2prev, bNext, nNumEmpty;

    nUsedLength0 = strbuf->nUsedLength;
    if (!( is0 = pINChISort ))
    {
        return nUsedLength0;
    }
    i = 0;
    pINChI_Prev = ( 0 <= ( ii = GET_II( bOutType, is0 ) ) ) ? is0->pINChI[ii] : NULL;
    is = NULL;
    mult = 0;
    bNext = 0;
    nNumEmpty = 0;

    /* For each connected component...    */
    for (i++; i <= num_components; i++)
    {
        pINChI = ( i < num_components && ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) ) ? is->pINChI[ii] : NULL;
        eq2prev = bUseMulipliers                                &&
            pINChI && pINChI_Prev && pINChI->lenConnTable > 1   &&
            pINChI_Prev->lenConnTable == pINChI->lenConnTable   &&
            !memcmp( pINChI_Prev->nConnTable, pINChI->nConnTable,
                pINChI_Prev->lenConnTable * sizeof( pINChI->nConnTable[0] ) );
        if (eq2prev)
        {
            mult++; /* mult = (number of non-empty equal items)-1 */
            continue;
        }
        else
        {
            if (pINChI_Prev)
            {
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                if (pINChI_Prev && pINChI_Prev->lenConnTable > 1)
                {
                    MakeMult( mult + 1, "*", strbuf, 0, bOverflow );
                    MakeCtStringNew( pCG, pINChI_Prev->nConnTable,
                        pINChI_Prev->lenConnTable,
                        0, NULL,
                        pINChI_Prev->nNumberOfAtoms,
                        strbuf, ATOM_MODE, bOverflow );
                }
                else
                {
                    nNumEmpty++;
                }
            }
        }
        pINChI_Prev = pINChI;
        mult = 0; /* we do not know whether the item is empty */
    }
    if (nNumEmpty == num_components && strbuf->nUsedLength > nUsedLength0)
    {
        strbuf->nUsedLength = nUsedLength0;
        strbuf->pStr[strbuf->nUsedLength] = '\0';
    }
    /*
    if ( nNumEmpty == num_components && tot_len > tot_len_inp ) {
    tot_len = tot_len_inp;
    strbuf->pStr[tot_len] = '\0';
    }
    */

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce H[ydrogens] substring of the whole structure InChI string
****************************************************************************/
int str_H_atoms( INCHI_SORT       *pINChISort,
                 INCHI_IOS_STRING *strbuf,
                 int               *bOverflow,
                 int               bOutType,
                 int               ATOM_MODE,
                 int               TAUT_MODE,
                 int               num_components,
                 int               bUseMulipliers )
{
    int          i, j, ii, len_H, nUsedLength0;
    INCHI_SORT   *is, *is0;
    INChI        *pINChI, *pINChI_Prev;
    int          mult, eq2prev, bNext, bNotEmpty, nNumEmpty;

    nNumEmpty = 0;
    is0 = pINChISort;
    is = NULL;
    i = 0;
    pINChI_Prev = ( 0 <= ( ii = GET_II( bOutType, is0 ) ) ) ? is0->pINChI[ii] : NULL;
    mult = 0;
    bNext = 0;
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i++; i <= num_components; i++)
    {

        pINChI = ( i < num_components && ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) ) ? is->pINChI[ii] : NULL;
        /*========== compare to previous ============*/
        eq2prev = bUseMulipliers &&
            pINChI && pINChI_Prev && ( pINChI->nNumberOfAtoms > 0 || pINChI->lenTautomer > 1 ) &&
            pINChI_Prev->nNumberOfAtoms == pINChI->nNumberOfAtoms &&
            ( !pINChI_Prev->nNumberOfAtoms || !memcmp( pINChI_Prev->nNum_H, pINChI->nNum_H,
                pINChI_Prev->nNumberOfAtoms * sizeof( pINChI->nNum_H[0] ) ) ) &&
            !CompareTautNonIsoPartOfINChI( pINChI_Prev, pINChI );

        if (eq2prev && pINChI_Prev->lenTautomer <= 1)
        {
            /* make sure it is not empty */
            eq2prev = 0;
            for (j = 0; j < pINChI_Prev->nNumberOfAtoms; j++)
            {
                if (pINChI_Prev->nNum_H[j])
                {
                    eq2prev = 1;
                    break;
                }
            }
        }
        if (eq2prev)
        {
            mult++; /* mult = (number of non-empty equal items)-1 */
            continue;
        }
        else
        {
            if (pINChI_Prev)
            {
                /* delimiter */
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                /* verify non-empty */
                bNotEmpty = 0;
                if (pINChI_Prev)
                {
                    bNotEmpty = ( pINChI_Prev->lenTautomer > 1 );
                    if (!bNotEmpty)
                    {
                        for (j = 0; j < pINChI_Prev->nNumberOfAtoms; j++)
                        {
                            if (pINChI_Prev->nNum_H[j])
                            {
                                bNotEmpty = 1;
                                break;
                            }
                        }
                    }
                }
                if (bNotEmpty)
                {
                    MakeMult( mult + 1, "*", strbuf, 0, bOverflow );
                    /* H-atoms */
                    len_H = MakeHString( 0, pINChI_Prev->nNum_H, pINChI_Prev->nNumberOfAtoms,
                        strbuf, ATOM_MODE, bOverflow );
                    /*  tautomeric groups */
                    MakeTautString( pINChI_Prev->nTautomer, pINChI_Prev->lenTautomer, ( 0 != len_H ),
                        strbuf, TAUT_MODE, bOverflow );
                }
                else
                {
                    nNumEmpty++;
                }
            }
        }
        pINChI_Prev = pINChI;
        mult = 0; /* we do not know whether the item is empty */
    }
    if (nNumEmpty == num_components && strbuf->nUsedLength > nUsedLength0)
    {
        strbuf->nUsedLength = nUsedLength0;
        strbuf->pStr[nUsedLength0] = '\0';
    }
    /*
    if ( nNumEmpty == num_components && tot_len > tot_len_inp ) {
    tot_len = tot_len_inp;
    strbuf->pStr[tot_len] = '\0';
    }
    */

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
    Produce charge substring of the whole structure InChI string
****************************************************************************/
int str_Charge2( INCHI_SORT       *pINChISort,
                 INCHI_SORT       *pINChISort2,
                 INCHI_IOS_STRING *strbuf,
                 int              *bOverflow,
                 int              bOutType,
                 int              num_components,
                 int              bSecondNonTautPass,
                 int              bOmitRepetitions,
                 int              bUseMulipliers )
{
    int          i, ii, ii2, nUsedLength0;
    INCHI_SORT   *is, *is2, *is0, *is20;
    INChI        *pINChI, *pINChI_Prev, *pINChI_Taut, *pINChI_Taut_Prev;
    int         nTotalCharge, nTotalCharge_Prev, nTotalCharge_Taut; /* djb-rwth: removing redundant variables */
    int          mult, eq2prev, eq2taut, eq2tautPrev, bNext;
    const char  *pPrevEquStr, *pCurrEquStr;
    int         multPrevEquStr;
    pINChI_Taut = NULL;
    pINChI_Prev = NULL;
    pINChI_Taut_Prev = NULL;
    mult = 0;
    bNext = 0;
    is = NULL;
    is2 = NULL;
    is0 = pINChISort;
    is20 = bSecondNonTautPass ? pINChISort2 : NULL;
    /* djb-rwth: removing redundant code */
    eq2tautPrev = 1; /* pINChI_Prev (previous pINChI) does not exist */
    pPrevEquStr = NULL; /*, *pCurrEquStr;*/
    multPrevEquStr = 0;
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i = 0; i <= num_components; i++)
    {

        /* 1st (taut) pass: bOutType=OUT_TN  ; 2nd (non-taut pass) bOutType=OUT_NT */
        pINChI = ( i < num_components && ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) ) ? is->pINChI[ii] : NULL;
        /*================ compare sp3 to previous =====================*/
        if (bSecondNonTautPass)
        {
            /* component that was output on the 1st pass */
            pINChI_Taut = ( i < num_components && ( is2 = is20 + i, 0 <= ( ii2 = GET_II( OUT_T1, is2 ) ) ) ) ? is2->pINChI[ii2] : NULL;
        }
        /*========= if bSecondNonTautPass then compare non-iso non-taut stereo to non-iso taut ========*/
        eq2taut = 0;
        if (!eq2taut && bSecondNonTautPass && bOmitRepetitions)
        {
            eq2taut = pINChI && pINChI_Taut && !pINChI_Taut->bDeleted &&
                ( nTotalCharge = pINChI->nTotalCharge ) && ( nTotalCharge_Taut = pINChI_Taut->nTotalCharge ) &&
                nTotalCharge == nTotalCharge_Taut;
            eq2taut = eq2taut ? ( iiEQU | iitNONTAUT ) : 0;
        }
        if (eq2taut)
        {
            /* we may be here only in case of the second (non-taut) pass */
            /* current non-taut stereo has been found to be same as tautomeric */
            if (pINChI_Prev && pINChI_Prev->nNumberOfAtoms)
            {
                /* previous component exists; output it */
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                if ((nTotalCharge_Prev = pINChI_Prev->nTotalCharge)) /* djb-rwth: addressing LLVM warning */
                {
                    MakeMult( mult + 1, "*", strbuf, 0, bOverflow );
                    inchi_strbuf_printf( strbuf, "%+d", nTotalCharge_Prev );
                }
            }
            else
            {
                if (pINChI_Taut_Prev && pINChI_Taut_Prev->nNumberOfAtoms && !pINChI_Taut_Prev->bDeleted)
                {
                    /* previous non-taut component exists only in taut list */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                }
            }
            /* we have found pINChI->nTotalCharge same as in pINChI_Taut */
            /* output this (current) equivalence as '*', that is, same as tautomeric */
            /* that was printed on the 1st pass. */

            pCurrEquStr = EquString( eq2taut );
            if (multPrevEquStr && pPrevEquStr)
            {
                if (pCurrEquStr && !strcmp( pCurrEquStr, pPrevEquStr ))
                {
                    multPrevEquStr++;
                }
                else
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = pCurrEquStr;
                    multPrevEquStr = 1;
                }
            }
            else
            {
                pPrevEquStr = pCurrEquStr;
                multPrevEquStr = 1;
            }

            pINChI_Prev = NULL; /* pINChI_Prev sp2 does not exist since */
            pINChI_Taut_Prev = NULL; /* pINChI has just been printed */
            mult = 0;
            eq2tautPrev = 1;     /* pINChI_Prev sp2 does not exist */
        }
        else
        {
            if (eq2tautPrev)
            {
                /* at this point pINChI_Prev does not exist; however, pINChI */
                /*might have been discovered and it is different from pINChI_Taut */
                if (multPrevEquStr && pPrevEquStr)
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = NULL;
                    multPrevEquStr = 0;
                }
                eq2tautPrev = 0;
                pINChI_Prev = pINChI;
                pINChI_Taut_Prev = pINChI_Taut;
                mult = 0;
            }
            else
            {
                /* check whether pINChI and pINChI_Prev have non-zero identical stereo sp3 */
                /*================ compare sp3 to previous =====================*/
                eq2prev = bUseMulipliers &&
                    pINChI && pINChI_Prev &&
                    ( nTotalCharge = pINChI->nTotalCharge ) && ( nTotalCharge_Prev = pINChI_Prev->nTotalCharge ) &&
                    nTotalCharge == nTotalCharge_Prev;
                if (eq2prev)
                {
                    mult++; /* mult = (number of non-empty equal items)-1 */
                    continue;
                }
                else
                {
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    if (pINChI_Prev && pINChI_Prev->nNumberOfAtoms)
                    {
                        if ((nTotalCharge_Prev = pINChI_Prev->nTotalCharge)) /* djb-rwth: addressing LLVM warning */
                        {
                            /* pINChI_Prev exists and has charge info */
                            MakeMult( mult + 1, "*", strbuf, 0, bOverflow );
                            inchi_strbuf_printf( strbuf, "%+d", nTotalCharge_Prev );
                        }
                        /* else charge is not present in pINChI_Prev */
                    }
                    else
                    {
                        /* djb-rwth: removing redundant code */
#if ( bRELEASE_VERSION != 1 && defined(_DEBUG) )
                        if (!(bSecondNonTautPass && pINChI_Taut_Prev && pINChI_Taut_Prev->nNumberOfAtoms && !pINChI_Taut_Prev->bDeleted))
                        {
                            int stop = 1;   /* <BRKPT> */
                        }
#endif
                    }
                }
                pINChI_Prev = pINChI;
                pINChI_Taut_Prev = pINChI_Taut;
                mult = 0; /* we do not know whether the item is empty */
            }
        }
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce FixedH substring of the whole structure InChI string
****************************************************************************/
int str_FixedH_atoms( INCHI_SORT       *pINChISort,
                      INCHI_IOS_STRING *strbuf,
                      int              *bOverflow,
                      int              bOutType,
                      int              ATOM_MODE,
                      int              num_components,
                      int              bUseMulipliers )
{
    int          i, j, ii, nNumEmpty, nUsedLength0;
    INCHI_SORT   *is, *is0;
    INChI        *pINChI, *pINChI_Prev;
    int          mult, eq2prev, bNext, bNotEmpty;

    is = NULL;
    is0 = pINChISort;
    i = 0;
    pINChI_Prev = ( 0 <= ( ii = GET_II( bOutType, is0 ) ) ) ? is0->pINChI[ii] : NULL;
    mult = 0;
    bNext = 0;
    nNumEmpty = 0;
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i++; i <= num_components; i++)
    {
        /* only non-tautomeric representation of tautomeric */
        pINChI = ( i < num_components && ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) ) ? is->pINChI[ii] : NULL;
        /*================ compare fixed H to previous =====================*/
        eq2prev = bUseMulipliers &&
            pINChI && pINChI_Prev && pINChI->nNumberOfAtoms > 0 &&
            pINChI_Prev->nNumberOfAtoms == pINChI->nNumberOfAtoms &&
            !memcmp( pINChI_Prev->nNum_H_fixed, pINChI->nNum_H_fixed,
                pINChI_Prev->nNumberOfAtoms * sizeof( pINChI->nNum_H_fixed[0] ) );
        if (eq2prev)
        {
            /* make sure it is not empty */
            eq2prev = 0;
            for (j = 0; j < pINChI_Prev->nNumberOfAtoms; j++)
            {
                if (pINChI_Prev->nNum_H_fixed[j])
                {
                    eq2prev = 1;
                    break;
                }
            }
        }
        if (eq2prev)
        {
            mult++; /* mult = (number of non-empty equal items)-1 */
            continue;
        }
        else
        {
            /* print pINChI_Prev */
            /* delimiter */
            if (bNext++)
            {
                MakeDelim( sCompDelim, strbuf, bOverflow );
            }
            if (pINChI_Prev)
            {
                /* verify it is not empty */
                bNotEmpty = 0;
                for (j = 0; j < pINChI_Prev->nNumberOfAtoms; j++)
                {
                    if (pINChI_Prev->nNum_H_fixed[j])
                    {
                        bNotEmpty = 1;
                        break;
                    }
                }
                if (bNotEmpty)
                {
                    MakeMult( mult + 1, "*", strbuf, 0, bOverflow );
                    /* H-atoms-fixed */
                    MakeHString( 0, pINChI_Prev->nNum_H_fixed,
                        pINChI_Prev->nNumberOfAtoms,
                        strbuf, ATOM_MODE, bOverflow );
                }
                else
                {
                    nNumEmpty++;
                }
            }
        }
        pINChI_Prev = pINChI;
        mult = 0; /* we do not know whether the item is empty */
    }
    if (nNumEmpty == num_components && strbuf->nUsedLength > nUsedLength0)
    {
        strbuf->nUsedLength = nUsedLength0;
        strbuf->pStr[nUsedLength0] = '\0';
    }
    /*
    if ( nNumEmpty == num_components && tot_len > tot_len_inp ) {
    tot_len = tot_len_inp;
    strbuf->pStr[tot_len] = '\0';
    }
    */

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce double bond stereo substring of the whole structure InChI string.
****************************************************************************/
int str_Sp2( INCHI_SORT       *pINChISort,
             INCHI_SORT       *pINChISort2,
             INCHI_IOS_STRING *strbuf,
             int              *bOverflow,
             int              bOutType,
             int              TAUT_MODE,
             int              num_components,
             int              bSecondNonTautPass,
             int              bOmitRepetitions,
             int              bUseMulipliers )
{
    int          i, ii, ii2, nUsedLength0;
    INCHI_SORT   *is, *is2, *is0, *is20;
    INChI        *pINChI, *pINChI_Prev, *pINChI_Taut, *pINChI_Taut_Prev;
    INChI_Stereo *Stereo, *Stereo_Prev, *Stereo_Taut, *Stereo_Taut_Prev;
    int          mult, eq2prev, eq2taut, eq2tautPrev, bNext;
    const char  *pPrevEquStr, *pCurrEquStr;
    int         multPrevEquStr;

    pINChI_Taut = NULL;
    pINChI_Prev = NULL;
    pINChI_Taut_Prev = NULL;
    mult = 0;
    bNext = 0;
    is = NULL;
    is2 = NULL;
    is0 = pINChISort;
    is20 = bSecondNonTautPass ? pINChISort2 : NULL;
    /* djb-rwth: removing redundant code */
    eq2tautPrev = 1; /* pINChI_Prev (previous pINChI) does not exist */
    pPrevEquStr = NULL; /*, *pCurrEquStr;*/
    multPrevEquStr = 0;
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component ... */
    for (i = 0; i <= num_components; i++)
    {

        /* 1st (taut) pass: bOutType=OUT_TN  ; 2nd (non-taut pass) bOutType=OUT_NT */
        pINChI = ( i < num_components && ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) ) ? is->pINChI[ii] : NULL;
        /*================ compare sp2 to previous =====================*/
        if (bSecondNonTautPass)
        {
            /* component that was output on the 1st pass */
            pINChI_Taut = ( i < num_components && ( is2 = is20 + i, 0 <= ( ii2 = GET_II( OUT_T1, is2 ) ) ) ) ? is2->pINChI[ii2] : NULL;
        }
        /*========= if bSecondNonTautPass then compare non-iso non-taut stereo to non-iso taut ========*/
        eq2taut = 0;
#if ( FIX_EMPTY_LAYER_BUG == 1 )
        if (!eq2taut && bSecondNonTautPass && bOmitRepetitions && pINChI && pINChI_Taut)
        {
            Stereo = pINChI->Stereo;
            Stereo_Taut = pINChI_Taut->Stereo;
            eq2taut = Stereo && Stereo_Taut &&
                Eql_INChI_Stereo( Stereo, EQL_SP2, Stereo_Taut, EQL_SP2, 0 );
            eq2taut = eq2taut ? ( iiSTEREO | iitNONTAUT ) : 0;

            if (!eq2taut &&
                !Eql_INChI_Stereo( Stereo, EQL_SP2, NULL, EQL_EXISTS, 0 ) &&
                Eql_INChI_Stereo( Stereo_Taut, EQL_SP2, NULL, EQL_EXISTS, 0 ))
            {
                eq2taut = iiEmpty; /* the current is empty while the preceding (taut) is not */
            }
        }
#else
        if (!eq2taut && bSecondNonTautPass && bOmitRepetitions)
        {
            eq2taut = pINChI && pINChI_Taut &&
                ( Stereo = pINChI->Stereo ) && ( Stereo_Taut = pINChI_Taut->Stereo ) &&
                Eql_INChI_Stereo( Stereo, EQL_SP2, Stereo_Taut, EQL_SP2, 0 );
            eq2taut = eq2taut ? ( iiSTEREO | iitNONTAUT ) : 0;
        }
#endif
        if (eq2taut)
        {
            /* we may be here only in case of the second (non-taut) pass */
            /* current non-taut stereo has been found to be same as tautomeric */
            if (pINChI_Prev && pINChI_Prev->nNumberOfAtoms)
            {
                /* previous component exists; output it */
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                if (( Stereo_Prev = pINChI_Prev->Stereo ) && Stereo_Prev->nNumberOfStereoBonds > 0)
                {
                    MakeMult( mult + 1, "*", strbuf, 0, bOverflow );

                    MakeStereoString( Stereo_Prev->nBondAtom1, Stereo_Prev->nBondAtom2,
                        Stereo_Prev->b_parity,
                        0, Stereo_Prev->nNumberOfStereoBonds,
                        strbuf, TAUT_MODE, bOverflow );
                }
            }
            else
            {
                if (pINChI_Taut_Prev && pINChI_Taut_Prev->nNumberOfAtoms)
                {
                    /* previous non-taut component exists only in taut list */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                }
            }
            /* we have found pINChI->Stereo sp2 same as in pINChI_Taut */
            /* output this (current) equivalence as '*', that is, same as tautomeric */
            /* that was printed on the 1st pass. */
            pCurrEquStr = EquString( eq2taut );
            if (multPrevEquStr && pPrevEquStr)
            {
                if (pCurrEquStr && !strcmp( pCurrEquStr, pPrevEquStr ))
                {
                    multPrevEquStr++;
                }
                else
                {
                    /* new EqStr is different; output the previous one */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = pCurrEquStr;
                    multPrevEquStr = 1;
                }
            }
            else
            {
                pPrevEquStr = pCurrEquStr;
                multPrevEquStr = 1;
            }
            pINChI_Prev = NULL; /* pINChI_Prev sp2 does not exist since */
            pINChI_Taut_Prev = NULL; /* pINChI has just been printed */
            mult = 0;
            eq2tautPrev = 1;     /* pINChI_Prev sp2 does not exist */
        }
        else
        {
            if (eq2tautPrev)
            {
                /* at this point pINChI_Prev does not exist; however, pINChI */
                /*might have been discovered and it is different from pINChI_Taut */
                if (multPrevEquStr && pPrevEquStr)
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = NULL;
                    multPrevEquStr = 0;
                }
                eq2tautPrev = 0;
                pINChI_Prev = pINChI;
                pINChI_Taut_Prev = pINChI_Taut;
                mult = 0;
            }
            else
            {
                /* check whether pINChI and pINChI_Prev have non-zero identical stereo sp2 */
                eq2prev = bUseMulipliers &&
                    pINChI && pINChI_Prev &&
                    ( Stereo = pINChI->Stereo ) && ( Stereo_Prev = pINChI_Prev->Stereo ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP2, Stereo_Prev, EQL_SP2, 0 );
                if (eq2prev)
                {
                    mult++; /* mult = (number of non-empty equal items)-1 */
                    continue;
                }
                else
                {
                    /* pINChI sp2 info is either different or trivial. Output pINChI_Prev anyway */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    if (pINChI_Prev && pINChI_Prev->nNumberOfAtoms)
                    {
                        if (( Stereo_Prev = pINChI_Prev->Stereo ) && Stereo_Prev->nNumberOfStereoBonds > 0)
                        {
                            /* pINChI_Prev exists and has sp2 info */
                            MakeMult( mult + 1, "*", strbuf, 0, bOverflow );

                            MakeStereoString( Stereo_Prev->nBondAtom1, Stereo_Prev->nBondAtom2,
                                Stereo_Prev->b_parity,
                                0, Stereo_Prev->nNumberOfStereoBonds,
                                strbuf, TAUT_MODE, bOverflow );
                        }
                        /* else sp2 info is not present in pINChI_Prev */
                    }
                    else
                    {
                        if (bSecondNonTautPass && pINChI_Taut_Prev && pINChI_Taut_Prev->nNumberOfAtoms)
                        {
                            if (( Stereo_Taut_Prev = pINChI_Taut_Prev->Stereo ) && Stereo_Taut_Prev->nNumberOfStereoBonds > 0)
                            {
                                /* since pINChI_Prev does not exist, pINChI_Taut_Prev is non-tautomeric */
                                /* and it has non-trivial sp2 info */
                                /*
                                tot_len += MakeDelim( sIdenticalValues, strbuf, bOverflow);
                                */
                                ;/* pINChI_Taut_Prev sp2 info was output in the main stereo section */
                            }
                            else
                            {
                                ; /* pINChI_Taut_Prev exists and has not sp2 info */
                            }
                        }
                    }
#if ( bRELEASE_VERSION != 1 && defined(_DEBUG) )
                        else
                        {
                            int stop = 1;   /* <BRKPT> */
                        }
#endif
                }
                pINChI_Prev = pINChI;
                pINChI_Taut_Prev = pINChI_Taut;
                mult = 0; /* we do not know whether the item is empty */
            }
        }
    }    /* end of for each connected component ... */

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce tetrahedral stereo substring of the whole structure InChI string.
****************************************************************************/
int str_Sp3( INCHI_SORT       *pINChISort,
             INCHI_SORT       *pINChISort2,
             INCHI_IOS_STRING *strbuf,
             int              *bOverflow,
             int              bOutType,
             int              TAUT_MODE,
             int              num_components,
             int              bRelRac,
             int              bSecondNonTautPass,
             int              bOmitRepetitions,
             int              bUseMulipliers )
{
    int          i, ii, ii2, nUsedLength0;
    INCHI_SORT   *is, *is2, *is0, *is20;
    INChI        *pINChI, *pINChI_Prev, *pINChI_Taut, *pINChI_Taut_Prev;
    INChI_Stereo *Stereo, *Stereo_Prev, *Stereo_Taut, *Stereo_Taut_Prev;
    int          mult, eq2prev, eq2taut, eq2tautPrev, bNext;
    const char  *pPrevEquStr, *pCurrEquStr;
    int         multPrevEquStr;
    pINChI_Taut = NULL;
    pINChI_Prev = NULL;
    pINChI_Taut_Prev = NULL;
    mult = 0;
    bNext = 0;
    is = NULL;
    is2 = NULL;
    is0 = pINChISort;
    is20 = bSecondNonTautPass ? pINChISort2 : NULL;
    /* djb-rwth: removing redundant code */
    eq2tautPrev = 1; /* pINChI_Prev (previous pINChI) does not exist */
    pPrevEquStr = NULL; /*, *pCurrEquStr;*/
    multPrevEquStr = 0;
#if ( REL_RAC_STEREO_IGN_1_SC == 1 )
#else
    bRelRac = 0;
#endif
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i = 0; i <= num_components; i++)
    {

        /* 1st (taut) pass: bOutType=OUT_TN  ; 2nd (non-taut pass) bOutType=OUT_NT */
        pINChI = ( i < num_components && ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) ) ? is->pINChI[ii] : NULL;
        /*================ compare sp3 to previous =====================*/
        if (bSecondNonTautPass)
        {
            /* component that was output on the 1st pass */
            pINChI_Taut = ( i < num_components && ( is2 = is20 + i, 0 <= ( ii2 = GET_II( OUT_T1, is2 ) ) ) ) ? is2->pINChI[ii2] : NULL;
        }
        /*========= if bSecondNonTautPass then compare non-iso non-taut stereo to non-iso taut ========*/
        eq2taut = 0;
#if ( FIX_EMPTY_LAYER_BUG == 1 )
        if (!eq2taut && bSecondNonTautPass && bOmitRepetitions && pINChI && pINChI_Taut)
        {
            Stereo = pINChI->Stereo;
            Stereo_Taut = pINChI_Taut->Stereo;
            eq2taut = Stereo && Stereo_Taut &&
                Eql_INChI_Stereo( Stereo, EQL_SP3, Stereo_Taut, EQL_SP3, bRelRac );
            eq2taut = eq2taut ? ( iiSTEREO | iitNONTAUT ) : 0;
            if (!eq2taut &&
                !Eql_INChI_Stereo( Stereo, EQL_SP3, NULL, EQL_EXISTS, 0 ) &&
                Eql_INChI_Stereo( Stereo_Taut, EQL_SP3, NULL, EQL_EXISTS, 0 ))
            {
                eq2taut = iiEmpty; /* the current is empty while the preceding (taut) is not */
            }
        }
#else
        if (!eq2taut && bSecondNonTautPass && bOmitRepetitions)
        {
            eq2taut = pINChI && pINChI_Taut &&
                ( Stereo = pINChI->Stereo ) && ( Stereo_Taut = pINChI_Taut->Stereo ) &&
                Eql_INChI_Stereo( Stereo, EQL_SP3, Stereo_Taut, EQL_SP3, bRelRac );
            eq2taut = eq2taut ? ( iiSTEREO | iitNONTAUT ) : 0;
        }
#endif
        if (eq2taut)
        {
            /* we may be here only in case of the second (non-taut) pass */
            /* current non-taut stereo has been found to be same as tautomeric */
            if (pINChI_Prev && pINChI_Prev->nNumberOfAtoms)
            {
                /* previous component exists; output it */
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                if (( Stereo_Prev = pINChI_Prev->Stereo ) && Stereo_Prev->nNumberOfStereoCenters > 0)
                {
                    /* non-empty item */
                    MakeMult( mult + 1, "*", strbuf, 0, bOverflow );
                    MakeStereoString( Stereo_Prev->nNumber, NULL,
                                      Stereo_Prev->t_parity,0,
                                      Stereo_Prev->nNumberOfStereoCenters,
                                      strbuf, TAUT_MODE, bOverflow );
                }
            }
            else
                if (pINChI_Taut_Prev && pINChI_Taut_Prev->nNumberOfAtoms)
                {
                    /* previous non-taut component exists only in taut list */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                }
            /* we have found pINChI->Stereo sp3 same as in pINChI_Taut */
            /* output this (current) equivalence as '*', that is, same as tautomeric */
            /* that was printed on the 1st pass. */

            pCurrEquStr = EquString( eq2taut );
            if (multPrevEquStr && pPrevEquStr)
            {
                if (pCurrEquStr && !strcmp( pCurrEquStr, pPrevEquStr ))
                {
                    multPrevEquStr++;
                }
                else
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = pCurrEquStr;
                    multPrevEquStr = 1;
                }
            }
            else
            {
                pPrevEquStr = pCurrEquStr;
                multPrevEquStr = 1;
            }

            pINChI_Prev = NULL; /* pINChI_Prev sp2 does not exist since */
            pINChI_Taut_Prev = NULL; /* pINChI has just been printed */
            mult = 0;
            eq2tautPrev = 1;     /* pINChI_Prev sp2 does not exist */
        }
        else
        {
            if (eq2tautPrev)
            {
                /* at this point pINChI_Prev does not exist; however, pINChI */
                /*might have been discovered and it is different from pINChI_Taut */
                if (multPrevEquStr && pPrevEquStr)
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = NULL;
                    multPrevEquStr = 0;
                }
                eq2tautPrev = 0;
                pINChI_Prev = pINChI;
                pINChI_Taut_Prev = pINChI_Taut;
                mult = 0;
            }
            else
            {
                /* check whether pINChI and pINChI_Prev have non-zero identical stereo sp3 */
                /*================ compare sp3 to previous =====================*/
                eq2prev = bUseMulipliers &&
                    pINChI && pINChI_Prev &&
                    ( Stereo = pINChI->Stereo ) && ( Stereo_Prev = pINChI_Prev->Stereo ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP3, Stereo_Prev, EQL_SP3, bRelRac );
                if (eq2prev)
                {
                    mult++; /* mult = (number of non-empty equal items)-1 */
                    continue;
                }
                else
                {
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    if (pINChI_Prev && pINChI_Prev->nNumberOfAtoms)
                    {
                        if (( Stereo_Prev = pINChI_Prev->Stereo ) && Stereo_Prev->nNumberOfStereoCenters > bRelRac)
                        {
                            /* pINChI_Prev exists and has sp3 info */
                            MakeMult( mult + 1, "*", strbuf, 0, bOverflow );

                            MakeStereoString( Stereo_Prev->nNumber, NULL, Stereo_Prev->t_parity,
                                0, Stereo_Prev->nNumberOfStereoCenters,
                                strbuf, TAUT_MODE, bOverflow );
                        }
                        /* else sp3 info is not present in pINChI_Prev */
                    }
                    else
                    {
                        if (bSecondNonTautPass && pINChI_Taut_Prev && pINChI_Taut_Prev->nNumberOfAtoms)
                        {
                            if (( Stereo_Taut_Prev = pINChI_Taut_Prev->Stereo ) && Stereo_Taut_Prev->nNumberOfStereoCenters > bRelRac)
                            {
                                /* since pINChI_Prev does not exist, pINChI_Taut_Prev is non-tautomeric */
                                /* and it has non-trivial sp3 info. This info has already been printed in the main section */
                                /*
                                tot_len += MakeDelim( sIdenticalValues, strbuf, bOverflow);
                                */
                                ; /* pINChI_Taut_Prev sp3 info was output in the main stereo section */
                            }
                            else
                            {
                                ; /* pINChI_Taut_Prev exists and has not sp3 info */
                            }
                        }
#if ( bRELEASE_VERSION != 1 && defined(_DEBUG) )
                        else
                        {
                            int stop = 1;   /* <BRKPT> */
                        }
#endif
                    }
                }
                pINChI_Prev = pINChI;
                pINChI_Taut_Prev = pINChI_Taut;
                mult = 0; /* we do not know whether the item is empty */
            }
        }
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Output abs stero inversion substring of the whole structure InChI string
****************************************************************************/
int str_StereoAbsInv( INCHI_SORT       *pINChISort,
                      INCHI_IOS_STRING *strbuf,
                      int              *bOverflow,
                      int              bOutType,
                      int              num_components )
{
    int          i, j, ii, nUsedLength0;
    INCHI_SORT   *is, *is0;
    INChI_Stereo *Stereo;
    INChI        *pINChI;

    is = NULL;
    is0 = pINChISort;
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i = 0; !*bOverflow && i < num_components; i++)
    {

        is = is0 + i;
        pINChI = ( 0 <= ( ii = GET_II( bOutType, is ) ) ) ? is->pINChI[ii] : NULL;
        if (pINChI && ( Stereo = pINChI->Stereo ) && ( j = Stereo->nCompInv2Abs ))
        {
            MakeDelim( j < 0 ? "1" : "0", strbuf, bOverflow );
        }
        else
        {
            MakeDelim( ".", strbuf, bOverflow );
        }
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce isotopic substring of the whole structure InChI string.
****************************************************************************/
int str_IsoAtoms( INCHI_SORT *pINChISort,
                  INCHI_SORT *pINChISort2,
                  INCHI_IOS_STRING *strbuf,
                  int *bOverflow,
                  int bOutType,
                  int TAUT_MODE,
                  int num_components,
                  int bAbcNumbers,
                  int bSecondNonTautPass,
                  int bOmitRepetitions,
                  int bUseMulipliers )
{
    int          i, ii, ii2, nUsedLength0;
    INCHI_SORT   *is, *is2, *is0, *is20;
    INChI        *pINChI, *pINChI_Prev, *pINChI_Taut, *pINChI_Taut_Prev;
    int          mult, eq2prev, eq2taut, eq2tautPrev, bNext;
    const char  *pPrevEquStr, *pCurrEquStr;
    int         multPrevEquStr;
    pINChI_Taut = NULL;
    pINChI_Prev = NULL;
    pINChI_Taut_Prev = NULL;
    mult = 0;
    bNext = 0;
    is = NULL;
    is2 = NULL;
    is0 = pINChISort;
    is20 = bSecondNonTautPass ? pINChISort2 : NULL;
    /* djb-rwth: removing redundant code */
    eq2tautPrev = 1; /* pINChI_Prev (previous pINChI) does not exist */
    pPrevEquStr = NULL; /*, *pCurrEquStr;*/
    multPrevEquStr = 0;
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i = 0; i <= num_components; i++)
    {

        /* 1st (taut) pass: bOutType=OUT_TN  ; 2nd (non-taut pass) bOutType=OUT_NT */
        pINChI = ( i < num_components && ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) ) ? is->pINChI[ii] : NULL;
        /*================ compare isotopic info to previous component =====================*/
        if (bSecondNonTautPass)
        {
            /* component that was output on the 1st pass */
            pINChI_Taut = ( i < num_components && ( is2 = is20 + i, 0 <= ( ii2 = GET_II( OUT_T1, is2 ) ) ) ) ? is2->pINChI[ii2] : NULL;
        }
        /*========= if bSecondNonTautPass then compare iso non-taut to taut non-iso ========*/
        eq2taut = 0;
        if (!eq2taut && bSecondNonTautPass && bOmitRepetitions)
        {
            eq2taut = Eql_INChI_Isotopic( pINChI, pINChI_Taut );
            eq2taut = eq2taut ? ( iiNUMB | iitNONTAUT ) : 0;
        }
        if (eq2taut)
        {
            /* we may be here only in case of the second (non-taut) pass */
            /* current non-taut isotopic info has been found to be same as current tautomeric */
            if (pINChI_Prev && pINChI_Prev->nNumberOfAtoms)
            {
                /* previous component exists; output it */
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                if (pINChI_Prev && ( pINChI_Prev->nNumberOfIsotopicAtoms > 0 ||
                    pINChI_Prev->nNumberOfIsotopicTGroups > 0 ))
                {
                    /* non-empty item */
                    MakeMult( mult + 1, "*", strbuf, 0, bOverflow );
                    /*  Isotopic atoms */
                    if (pINChI_Prev->nNumberOfIsotopicAtoms > 0/* && nStrLen-tot_len > 2*/ && !*bOverflow)
                    { /* dereferenced bOverflow 2004-06-07 */
                        MakeIsoAtomString( pINChI_Prev->IsotopicAtom,
                            pINChI_Prev->nNumberOfIsotopicAtoms,
                            strbuf,
                            TAUT_MODE, bOverflow );
                    }
                    /*  Isotopic tautomeric groups */
                    if (pINChI_Prev->nNumberOfIsotopicTGroups > 0 &&
                        /*nStrLen-tot_len > 3 && */
                        !*bOverflow)
                    {
                        MakeDelim( bAbcNumbers ? ITEM_DELIMETER : "(", strbuf, bOverflow );
                        MakeIsoTautString( pINChI_Prev->IsotopicTGroup, pINChI_Prev->nNumberOfIsotopicTGroups,
                            strbuf, TAUT_MODE, bOverflow );
                        if (!bAbcNumbers)
                        {
                            MakeDelim( ")", strbuf, bOverflow );
                        }
                    }
                }
            }
            else
            {
                if (pINChI_Taut_Prev && pINChI_Taut_Prev->nNumberOfAtoms)
                {
                    /* previous non-taut component exists only in taut list */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                }
            }
            /* we have found pINChI isotopic info to be same as in pINChI_Taut */
            /* output this (current) equivalence as '*', that is, same as tautomeric */
            /* that was printed on the 1st pass. */
            pCurrEquStr = EquString( eq2taut );
            if (multPrevEquStr && pPrevEquStr)
            {
                if (pCurrEquStr && !strcmp( pCurrEquStr, pPrevEquStr ))
                {
                    multPrevEquStr++;
                }
                else
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = pCurrEquStr;
                    multPrevEquStr = 1;
                }
            }
            else
            {
                pPrevEquStr = pCurrEquStr;
                multPrevEquStr = 1;
            }
            pINChI_Prev = NULL; /* pINChI_Prev isotopic info does not exist since */
            pINChI_Taut_Prev = NULL; /* pINChI has just been printed */
            mult = 0;
            eq2tautPrev = 1;     /* pINChI_Prev isotopic info does not exist */
        }
        else
            if (eq2tautPrev)
            {
                /* at this point pINChI_Prev does not exist; however, pINChI */
                /* might have been discovered and it is different from pINChI_Taut */
                if (multPrevEquStr && pPrevEquStr)
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = NULL;
                    multPrevEquStr = 0;
                }
                eq2tautPrev = 0;
                pINChI_Prev = pINChI;
                pINChI_Taut_Prev = pINChI_Taut;
                mult = 0;
            }
            else
            {
                /*================ compare iso composition to previous =====================*/
                /* check whether pINChI and pINChI_Prev have non-zero identical isotopic info */
                eq2prev = bUseMulipliers && Eql_INChI_Isotopic( pINChI, pINChI_Prev );
                if (eq2prev)
                {
                    mult++; /* mult = (number of non-empty equal items)-1 */
                    continue;
                }
                else
                {
                    /* pINChI isotopic info is either different or empty. Output pINChI_Prev anyway */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    if (pINChI_Prev && pINChI_Prev->nNumberOfAtoms)
                    {
                        if (( pINChI_Prev->nNumberOfIsotopicAtoms > 0 ||
                              pINChI_Prev->nNumberOfIsotopicTGroups > 0 ))
                        {
                            /* pINChI_Prev exists and has isotopic info */
                            MakeMult( mult + 1, "*", strbuf, 0, bOverflow );
                            /*  Isotopic atoms */
                            if (pINChI_Prev->nNumberOfIsotopicAtoms > 0 &&
                                /*nStrLen-tot_len > 2 && */
                                !*bOverflow)
                            {
                                MakeIsoAtomString( pINChI_Prev->IsotopicAtom,
                                    pINChI_Prev->nNumberOfIsotopicAtoms,
                                    strbuf, TAUT_MODE, bOverflow );
                            }
                            /*  Isotopic tautomeric groups */
                            if (pINChI_Prev->nNumberOfIsotopicTGroups > 0 &&
                                /*nStrLen-tot_len > 3 && */
                                !*bOverflow)
                            {
                                MakeDelim( bAbcNumbers ? ITEM_DELIMETER : "(", strbuf, bOverflow );
                                MakeIsoTautString( pINChI_Prev->IsotopicTGroup, pINChI_Prev->nNumberOfIsotopicTGroups,
                                    strbuf, TAUT_MODE, bOverflow );
                                if (!bAbcNumbers)
                                {
                                    MakeDelim( ")", strbuf, bOverflow );
                                }
                            }
                        }
                        /* else isotopic info is not present in pINChI_Prev */
                    }
                    else
                    {
                        if (bSecondNonTautPass && pINChI_Taut_Prev && pINChI_Taut_Prev->nNumberOfAtoms)
                        {
                            if (( pINChI_Taut_Prev->nNumberOfIsotopicAtoms > 0 ||
                                  pINChI_Taut_Prev->nNumberOfIsotopicTGroups > 0 ))
                            {
                                /* since pINChI_Prev does not exist, pINChI_Taut_Prev is non-tautomeric */
                                /* and it has non-trivial isotopic info */
                                /*
                                tot_len += MakeDelim( sIdenticalValues, strbuf, bOverflow);
                                */
                                ;/* pINChI_Taut_Prev isotopic info was output in the main isotopic section */
                            }
                            else
                            {
                                ; /* pINChI_Taut_Prev exists and has not isotopic info */
                            }
                        }
#if ( bRELEASE_VERSION != 1 && defined(_DEBUG) )
                        else
                        {
                            int stop = 1;   /* <BRKPT> */
                        }
#endif
                    }
                }
                /* Fix17: moved here 2004-10-08 */
                pINChI_Prev = pINChI;
                pINChI_Taut_Prev = pINChI_Taut;
                mult = 0; /* we do not know whether the item is empty */
            }
        /* Fix17: moved from here 2004-10-08
        pINChI_Prev = pINChI;
        pINChI_Taut_Prev = pINChI_Taut;
        mult = 0;
        */
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce isotopic-dbonds stereo substring of the whole structure InChI string.
****************************************************************************/
int str_IsoSp2( INCHI_SORT       *pINChISort,
                INCHI_SORT       *pINChISort2,
                INCHI_IOS_STRING *strbuf,
                int              *bOverflow,
                int              bOutType,
                int              TAUT_MODE,
                int              num_components,
                int              bSecondNonTautPass,
                int              bOmitRepetitions,
                int              bUseMulipliers )
{
    int          i, ii, ii2, nUsedLength0;
    INCHI_SORT   *is, *is2, *is0, *is20;
    INChI        *pINChI, *pINChI_Prev, *pINChI_Taut, *pINChI_Taut_Prev;
    INChI_Stereo *Stereo, *Stereo_Prev, *Stereo_Taut, *Stereo_Taut_Prev;
    int          mult, eq2prev, eq2taut, eq2tautPrev = 1, bNext; /* djb-rwth: initialisation required to avoid garbage values */
    const char  *pPrevEquStr, *pCurrEquStr;
    int         multPrevEquStr;
    pINChI_Taut = NULL;
    pINChI_Prev = NULL;
    pINChI_Taut_Prev = NULL;
    mult = 0;
    bNext = 0;
    is = NULL;
    is2 = NULL;
    is0 = pINChISort;
    is20 = bSecondNonTautPass ? pINChISort2 : NULL;
    /* djb-rwth: removing redundant code */
    pPrevEquStr = NULL; /*, *pCurrEquStr;*/
    multPrevEquStr = 0;
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i = 0; i <= num_components; i++)
    {
        /* 1st (taut) pass: bOutType=OUT_TN  ; 2nd (non-taut pass) bOutType=OUT_NT */
        pINChI = ( i < num_components && ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) ) ? is->pINChI[ii] : NULL;
        /*================ compare sp2 to previous =====================*/
        if (bSecondNonTautPass)
        {
            /* component that was output on the 1st pass */
            pINChI_Taut = ( i < num_components && ( is2 = is20 + i, 0 <= ( ii2 = GET_II( OUT_T1, is2 ) ) ) ) ? is2->pINChI[ii2] : NULL;
        }
        eq2taut = 0;
        /*========= if bSecondNonTautPass then compare iso non-taut stereo to other stereo ========*/
        if (bSecondNonTautPass && bOmitRepetitions)
        {
            /* compare non-tautomeric isotopic to:
            *   a) non-tautomeric non-isotopic
            *   b) tautomeric non-isotopic
            *   c) tautomeric isotopic
            */
            /* a) compare non-tautomeric isotopic to non-tautomeric non-isotopic */
            if (!eq2taut)
            {
                eq2taut = pINChI &&
                    /* non-taut isotopic */                  /* non-taut non-isotopic */
                    ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Taut = pINChI->Stereo ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP2, Stereo_Taut, EQL_SP2, 0 );
                /* stereo     isotopic non-taut =  non-taut (stereo) */
                eq2taut = eq2taut ? ( iiSTEREO | iitISO | iitNONTAUT | iiEq2NONTAUT ) : 0;
            }
            /* b) compare non-tautomeric isotopic to tautomeric non-isotopic */
            if (!eq2taut)
            {
                eq2taut = pINChI && pINChI_Taut &&
                    /* non-taut isotopic */                  /* taut non-isotopic */
                    ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Taut = pINChI_Taut->Stereo ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP2, Stereo_Taut, EQL_SP2, 0 );
                /* stereo     isotopic non-taut =  taut (stereo) */
                eq2taut = eq2taut ? ( iiSTEREO | iitISO | iitNONTAUT ) : 0;
            }
            /* c) compare non-tautomeric isotopic to tautomeric isotopic */
            if (!eq2taut && bSecondNonTautPass && bOmitRepetitions)
            {
                eq2taut = pINChI && pINChI_Taut &&
                    ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Taut = pINChI_Taut->StereoIsotopic ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP2, Stereo_Taut, EQL_SP2, 0 );
                /* stereo     isotopic non-taut =  isotopic taut (stereo) */
                eq2taut = eq2taut ? ( iiSTEREO | iitISO | iitNONTAUT | iiEq2ISO ) : 0;
            }
#if ( FIX_EMPTY_LAYER_BUG == 1 )
            if (!eq2taut && pINChI && !( ( Stereo = pINChI->StereoIsotopic ) &&
                Eql_INChI_Stereo( Stereo, EQL_SP2, NULL, EQL_EXISTS, 0 ) ))
            {
                /* component has no stereo; check whether it has stereo in the preceding layers */
                if (pINChI_Taut && ( Stereo_Taut = pINChI_Taut->Stereo ) && /* F is not empty */
                    Eql_INChI_Stereo( Stereo_Taut, EQL_SP2, NULL, EQL_EXISTS, 0 ) ||
                    !( pINChI_Taut && ( Stereo_Taut = pINChI_Taut->Stereo ) &&  /* M is empty and ... */
                        Eql_INChI_Stereo( Stereo_Taut, EQL_SP2, NULL, EQL_EXISTS, 0 ) ) &&
                        ( pINChI_Taut && ( Stereo_Taut = pINChI_Taut->StereoIsotopic ) &&  /* ... MI is not empty */
                            Eql_INChI_Stereo( Stereo_Taut, EQL_SP2, NULL, EQL_EXISTS, 0 ) ))
                {

                    eq2taut = iiEmpty; /* the component has stereo in the preceding layer  */
                }
            }
#endif
        }
        else
        {
            /*========= if not bSecondNonTautPass then compare iso taut stereo to non-iso taut ========*/
            if (!bSecondNonTautPass && bOmitRepetitions)
            {
                /* compare tautomeric isotopic to tautomeric non-isotopic */
                if (!eq2taut)
                {
                    eq2taut = pINChI &&
                        /* taut isotopic */                  /* taut non-isotopic */
                        ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Taut = pINChI->Stereo ) &&
                        Eql_INChI_Stereo( Stereo, EQL_SP2, Stereo_Taut, EQL_SP2, 0 );
                    /* stereo     isotopic taut =  taut (stereo) */
                    eq2taut = eq2taut ? ( iiSTEREO | iitISO ) : 0;
#if ( FIX_EMPTY_LAYER_BUG == 1 )
                    if (!eq2taut && pINChI && !( ( Stereo = pINChI->StereoIsotopic ) &&
                                                 Eql_INChI_Stereo( Stereo, EQL_SP2, NULL, EQL_EXISTS, 0 ) ))
                    {
                        /* component has no MI stereo; check whether it has stereo in the preceding layer M */
                        if (( Stereo_Taut = pINChI->Stereo ) &&
                            Eql_INChI_Stereo( Stereo_Taut, EQL_SP2, NULL, EQL_EXISTS, 0 ))
                        {
                            eq2taut = iiEmpty; /* the component has stereo in the preceding layer  */
                        }
                    }
#endif
                }
            }
        }
        if (eq2taut)
        {
            /* we may be here only in case of the current layer found equal in another layer the same component */
            if (pINChI_Prev && pINChI_Prev->nNumberOfAtoms)
            {
                /* previous component exists; output it before output the current component */
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                if (( Stereo_Prev = pINChI_Prev->StereoIsotopic ) && Stereo_Prev->nNumberOfStereoBonds > 0)
                {
                    MakeMult( mult + 1, "*", strbuf, 0, bOverflow );

                    MakeStereoString( Stereo_Prev->nBondAtom1, Stereo_Prev->nBondAtom2,
                        Stereo_Prev->b_parity,
                        0, Stereo_Prev->nNumberOfStereoBonds,
                        strbuf, TAUT_MODE, bOverflow );
                }
            }
            else
            {
                if (pINChI_Taut_Prev && pINChI_Taut_Prev->nNumberOfAtoms)
                {
                    /* previous non-taut component exists only in taut list */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    /* do not output stereo of non-tautomeric in non-taut layer: it has been output in the main layer */
                }
            }
            /* we have found another (previously printed) layer of the current component equal to this layer */
            /* output this (current) equivalence mark = EquString(eq2taut) */
            pCurrEquStr = EquString( eq2taut );
            if (multPrevEquStr && pPrevEquStr)
            {
                if (pCurrEquStr && !strcmp( pCurrEquStr, pPrevEquStr ))
                {
                    multPrevEquStr++;
                }
                else
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = pCurrEquStr;
                    multPrevEquStr = 1;
                }
            }
            else
            {
                pPrevEquStr = pCurrEquStr;
                multPrevEquStr = 1;
            }
            pINChI_Prev = NULL; /* pINChI_Prev sp2 does not exist since */
            pINChI_Taut_Prev = NULL; /* pINChI has just been printed */
            mult = 0;
            eq2tautPrev = 1;     /* pINChI_Prev and pINChI_Taut_Prev have already been */
        }
        else
        {
            if (eq2tautPrev)
            {
                /* at this point pINChI_Prev does not exist; however, pINChI */
                /*might have been discovered and it is different from pINChI_Taut */
                if (multPrevEquStr && pPrevEquStr)
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = NULL;
                    multPrevEquStr = 0;
                }
                eq2tautPrev = 0;
                pINChI_Prev = pINChI;
                pINChI_Taut_Prev = pINChI_Taut;
                mult = 0;
            }
            else
            {
                /* current layer is different from previously printed layers of the current component */
                /* compare the current layer to this layer of the previous component: */
                /* check whether pINChI and pINChI_Prev have non-zero identical stereo sp2 */
                /*================ compare iso sp2 to previous =====================*/
                eq2prev = bUseMulipliers &&
                    pINChI && pINChI_Prev &&
                    ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Prev = pINChI_Prev->StereoIsotopic ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP2, Stereo_Prev, EQL_SP2, 0 );
                if (eq2prev)
                {
                    mult++; /* mult = (number of non-empty equal items)-1 */
                    continue;
                }
                else
                {
                    /* the current layer is different from this layer of the previous component */
                    /* therefore print the current layer */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    if (pINChI_Prev && pINChI_Prev->nNumberOfAtoms)
                    {
                        if (( Stereo_Prev = pINChI_Prev->StereoIsotopic ) && Stereo_Prev->nNumberOfStereoBonds > 0)
                        {
                            MakeMult( mult + 1, "*", strbuf, 0, bOverflow );

                            MakeStereoString( Stereo_Prev->nBondAtom1, Stereo_Prev->nBondAtom2,
                                Stereo_Prev->b_parity,
                                0, Stereo_Prev->nNumberOfStereoBonds,
                                strbuf, TAUT_MODE, bOverflow );
                        }
                        /* else sp2 info is not present in pINChI_Prev */
                    }
                    else
                    {/* do not print pINChI_Prev because it either do not exist of have already been printed */
                        if (bSecondNonTautPass && pINChI_Taut_Prev && pINChI_Taut_Prev->nNumberOfAtoms)
                        {
                            if (( Stereo_Taut_Prev = pINChI_Taut_Prev->StereoIsotopic ) && Stereo_Taut_Prev->nNumberOfStereoBonds > 0)
                            {
                                /* since pINChI_Prev does not exist, pINChI_Taut_Prev is non-tautomeric */
                                /* and it has non-trivial sp2 info */
                                /*
                                tot_len += MakeDelim( sIdenticalValues, strbuf, bOverflow);
                                */
                                ;/* pINChI_Taut_Prev sp3 info was output in the main stereo section */
                            }
                            else
                            {
                                ; /* pINChI_Taut_Prev exists and has not sp2 info */
                            }
                        }
#if ( bRELEASE_VERSION != 1 && defined(_DEBUG) )
                        else
                        {
                            int stop = 1;   /* <BRKPT> */
                        }
#endif
                    }
                }
                pINChI_Prev = pINChI;
                pINChI_Taut_Prev = pINChI_Taut;
                mult = 0; /* we do not know whether the item is empty */
            }
        }
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce isotopic-tetr stereo substring of the whole structure InChI string.
****************************************************************************/
int str_IsoSp3( INCHI_SORT       *pINChISort,
                INCHI_SORT       *pINChISort2,
                INCHI_IOS_STRING *strbuf,
                int              *bOverflow,
                int              bOutType,
                int              TAUT_MODE,
                int              num_components,
                int              bRelRac,
                int              bSecondNonTautPass,
                int              bOmitRepetitions,
                int              bUseMulipliers )
{
    int          i, ii, ii2, nUsedLength0;
    INCHI_SORT   *is, *is2, *is0, *is20;
    INChI        *pINChI, *pINChI_Prev, *pINChI_Taut, *pINChI_Taut_Prev;
    INChI_Stereo *Stereo, *Stereo_Prev, *Stereo_Taut, *Stereo_Taut_Prev;
    int          mult, eq2prev, eq2taut, eq2tautPrev, bNext;
    const char  *pPrevEquStr, *pCurrEquStr;
    int         multPrevEquStr;
    pINChI_Taut = NULL;
    pINChI_Prev = NULL;
    pINChI_Taut_Prev = NULL;
    mult = 0;
    bNext = 0;
    is = NULL;
    is2 = NULL;
    is0 = pINChISort;
    is20 = bSecondNonTautPass ? pINChISort2 : NULL;
    /* djb-rwth: removing redundant code */
    eq2tautPrev = 1; /* pINChI_Prev (previous pINChI) does not exist */
    pPrevEquStr = NULL; /*, *pCurrEquStr;*/
    multPrevEquStr = 0;
#if ( REL_RAC_STEREO_IGN_1_SC == 1 )
#else
    bRelRac = 0;
#endif
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i = 0; i <= num_components; i++)
    {

        /* 1st (taut) pass: bOutType=OUT_TN  ; 2nd (non-taut pass) bOutType=OUT_NT */
        pINChI = ( i < num_components && ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) ) ? is->pINChI[ii] : NULL;
        /*================ compare sp2 to previous =====================*/
        if (bSecondNonTautPass)
        {
            /* component that was output on the 1st pass */
            pINChI_Taut = ( i < num_components && ( is2 = is20 + i, 0 <= ( ii2 = GET_II( OUT_T1, is2 ) ) ) ) ? is2->pINChI[ii2] : NULL;
        }
        eq2taut = 0;
        /*========= if bSecondNonTautPass then compare iso non-taut stereo to other stereo ========*/
        if (bSecondNonTautPass && bOmitRepetitions)
        {
            /* compare non-tautomeric isotopic to:
            *   a) non-tautomeric non-isotopic
            *   b) tautomeric non-isotopic
            *   c) tautomeric isotopic
            */
            /* a) compare non-tautomeric isotopic to non-tautomeric non-isotopic */
            if (!eq2taut)
            {
                eq2taut = pINChI && /* non-taut isotopic */                  /* non-taut non-isotopic */
                    ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Taut = pINChI->Stereo ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP3, Stereo_Taut, EQL_SP3, bRelRac );
                /* stereo     isotopic non-taut =  non-taut (stereo) */
                eq2taut = eq2taut ? ( iiSTEREO | iitISO | iitNONTAUT | iiEq2NONTAUT ) : 0;
            }
            /* b) compare non-tautomeric isotopic to tautomeric non-isotopic */
            if (!eq2taut)
            {
                eq2taut = pINChI && pINChI_Taut &&
                    /* non-taut isotopic */                  /* taut non-isotopic */
                    ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Taut = pINChI_Taut->Stereo ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP3, Stereo_Taut, EQL_SP3, bRelRac );
                /* stereo     isotopic non-taut =  taut (stereo) */
                eq2taut = eq2taut ? ( iiSTEREO | iitISO | iitNONTAUT ) : 0;
            }
            /* c) compare non-tautomeric isotopic to tautomeric isotopic */
            if (!eq2taut && bSecondNonTautPass && bOmitRepetitions)
            {
                eq2taut = pINChI && pINChI_Taut &&
                    ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Taut = pINChI_Taut->StereoIsotopic ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP3, Stereo_Taut, EQL_SP3, bRelRac );
                /* stereo     isotopic non-taut =  isotopic taut (stereo) */
                eq2taut = eq2taut ? ( iiSTEREO | iitISO | iitNONTAUT | iiEq2ISO ) : 0;
            }
#if ( FIX_EMPTY_LAYER_BUG == 1 )
            if (!eq2taut && pINChI && !( ( Stereo = pINChI->StereoIsotopic ) &&
                Eql_INChI_Stereo( Stereo, EQL_SP3, NULL, EQL_EXISTS, 0 ) ))
            {
                /* component has no stereo; check whether it has stereo in the preceding layers */
                if (pINChI_Taut && ( Stereo_Taut = pINChI_Taut->Stereo ) && /* F is not empty */
                    Eql_INChI_Stereo( Stereo_Taut, EQL_SP3, NULL, EQL_EXISTS, 0 ) ||
                    !( pINChI_Taut && ( Stereo_Taut = pINChI_Taut->Stereo ) &&  /* M is empty and ... */
                        Eql_INChI_Stereo( Stereo_Taut, EQL_SP3, NULL, EQL_EXISTS, 0 ) ) &&
                        ( pINChI_Taut && ( Stereo_Taut = pINChI_Taut->StereoIsotopic ) &&  /* ... MI is not empty */
                            Eql_INChI_Stereo( Stereo_Taut, EQL_SP3, NULL, EQL_EXISTS, 0 ) ))
                {

                    eq2taut = iiEmpty; /* the component has stereo in the preceding layer  */
                }
            }
#endif
        }
        else
        {
            /*========= if not bSecondNonTautPass then compare iso taut stereo to non-iso taut ========*/
            if (!bSecondNonTautPass && bOmitRepetitions)
            {
                /* compare tautomeric isotopic to tautomeric non-isotopic */
                if (!eq2taut)
                {
                    eq2taut = pINChI &&
                        /* taut isotopic */                  /* taut non-isotopic */
                        ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Taut = pINChI->Stereo ) &&
                        Eql_INChI_Stereo( Stereo, EQL_SP3, Stereo_Taut, EQL_SP3, bRelRac );
                    /* stereo     isotopic taut =  taut (stereo) */
                    eq2taut = eq2taut ? ( iiSTEREO | iitISO ) : 0;
#if ( FIX_EMPTY_LAYER_BUG == 1 )
                    if (!eq2taut && pINChI && !( ( Stereo = pINChI->StereoIsotopic ) &&
                                                 Eql_INChI_Stereo( Stereo, EQL_SP3, NULL, EQL_EXISTS, 0 ) ))
                    {
                        /* component has no MI stereo; check whether it has stereo in the preceding layer M */
                        if (( Stereo_Taut = pINChI->Stereo ) &&
                            Eql_INChI_Stereo( Stereo_Taut, EQL_SP3, NULL, EQL_EXISTS, 0 ))
                        {
                            eq2taut = iiEmpty; /* the component has stereo in the preceding layer  */
                        }
                    }
#endif
                }
            }
        }
        if (eq2taut)
        {
            /* we may be here only in case of the current layer found equal in another layer the same component */
            if (pINChI_Prev && pINChI_Prev->nNumberOfAtoms)
            {
                /* previous component exists; output it before output the current component */
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                if (( Stereo_Prev = pINChI_Prev->StereoIsotopic ) && Stereo_Prev->nNumberOfStereoCenters > bRelRac)
                {
                    MakeMult( mult + 1, "*", strbuf, 0, bOverflow );

                    MakeStereoString( Stereo_Prev->nNumber, NULL, Stereo_Prev->t_parity,
                        0, Stereo_Prev->nNumberOfStereoCenters,
                        strbuf, TAUT_MODE, bOverflow );
                }
            }
            else
            {
                if (pINChI_Taut_Prev && pINChI_Taut_Prev->nNumberOfAtoms)
                {
                    /* previous non-taut component exists only in taut list */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    /* do not output stereo of non-tautomeric in non-taut layer: it has been output in the main layer */
                }
            }
            /* we have found another (previously printed) layer of the current component equal to this layer */
            /* output this (current) equivalence mark = EquString(eq2taut) */
            pCurrEquStr = EquString( eq2taut );
            if (multPrevEquStr && pPrevEquStr)
            {
                if (pCurrEquStr && !strcmp( pCurrEquStr, pPrevEquStr ))
                {
                    multPrevEquStr++;
                }
                else
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = pCurrEquStr;
                    multPrevEquStr = 1;
                }
            }
            else
            {
                pPrevEquStr = pCurrEquStr;
                multPrevEquStr = 1;
            }
            pINChI_Prev = NULL; /* pINChI_Prev sp2 does not exist since */
            pINChI_Taut_Prev = NULL; /* pINChI has just been printed */
            mult = 0;
            eq2tautPrev = 1;     /* pINChI_Prev and pINChI_Taut_Prev have already been output */
        }
        else
        {
            if (eq2tautPrev)
            {
                /* at this point pINChI_Prev does not exist; however, pINChI */
                /*might have been discovered and it is different from pINChI_Taut */
                if (multPrevEquStr && pPrevEquStr)
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = NULL;
                    multPrevEquStr = 0;
                }
                eq2tautPrev = 0;
                pINChI_Prev = pINChI;
                pINChI_Taut_Prev = pINChI_Taut;
                mult = 0;
            }
            else
            {
                /* current layer is different from previously printed layers of the current component */
                /* compare the current layer to this layer of the previous component: */
                /* check whether pINChI and pINChI_Prev have non-zero identical stereo sp2 */
                /*================ compare iso sp3 to previous =====================*/
                eq2prev = bUseMulipliers && pINChI && pINChI_Prev &&
                    ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Prev = pINChI_Prev->StereoIsotopic ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP3, Stereo_Prev, EQL_SP3, bRelRac );
                if (eq2prev)
                {
                    mult++; /* mult = (number of non-empty equal items)-1 */
                    continue;
                }
                else
                {
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    if (pINChI_Prev && pINChI_Prev->nNumberOfAtoms)
                    {
                        if (( Stereo_Prev = pINChI_Prev->StereoIsotopic ) && Stereo_Prev->nNumberOfStereoCenters > bRelRac)
                        {
                            MakeMult( mult + 1, "*", strbuf, 0, bOverflow );

                            MakeStereoString( Stereo_Prev->nNumber, NULL, Stereo_Prev->t_parity,
                                0, Stereo_Prev->nNumberOfStereoCenters,
                                strbuf, TAUT_MODE, bOverflow );
                        }
                        /* else sp3 info is not present in pINChI_Prev */
                    }
                    else
                        /* do not print pINChI_Prev because it either do not exist of have already been printed */
                        if (bSecondNonTautPass && pINChI_Taut_Prev && pINChI_Taut_Prev->nNumberOfAtoms)
                        {
                            if (( Stereo_Taut_Prev = pINChI_Taut_Prev->StereoIsotopic ) && Stereo_Taut_Prev->nNumberOfStereoCenters > bRelRac)
                            {
                                /* since pINChI_Prev does not exist, pINChI_Taut_Prev is non-tautomeric */
                                /* and it has non-trivial sp2 info */
                                /*
                                tot_len += MakeDelim( sIdenticalValues, strbuf, bOverflow);
                                */
                                ;/* pINChI_Taut_Prev sp3 info was output in the main stereo section */
                            }
                            else
                            {
                                ; /* pINChI_Taut_Prev exists and has not sp3 info */
                            }
                        }
#if ( bRELEASE_VERSION != 1 && defined(_DEBUG) )
                        else
                        {
                            int stop = 1;   /* <BRKPT> */
                        }
#endif
                }
                pINChI_Prev = pINChI;
                pINChI_Taut_Prev = pINChI_Taut;
                mult = 0; /* we do not know whether the item is empty */
            }
        }
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Output isotopic abs stero inversion substring
  of the whole structure InChI string
****************************************************************************/
int str_IsoStereoAbsInv( INCHI_SORT       *pINChISort,
                         INCHI_IOS_STRING *strbuf,
                         int              *bOverflow,
                         int              bOutType,
                         int              num_components )
{
    int          i, j, ii, nUsedLength0;
    INCHI_SORT   *is, *is0;
    INChI_Stereo *Stereo;
    INChI        *pINChI;

    is = NULL;
    is0 = pINChISort;
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i = 0; !*bOverflow && i < num_components; i++)
    {
        is = is0 + i;
        pINChI = ( 0 <= ( ii = GET_II( bOutType, is ) ) )
            ? is->pINChI[ii]
            : NULL;
        if (pINChI &&
            ( Stereo = pINChI->StereoIsotopic ) &&
            ( j = Stereo->nCompInv2Abs ))
        {
            MakeDelim( j < 0 ? "1" : "0", strbuf, bOverflow );
        }
        else
        {
            MakeDelim( ".", strbuf, bOverflow );
        }
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}



/*
Generate AuxInfo substrings
*/



/****************************************************************************
  Produce equivalence substring of AuxInfo
****************************************************************************/
int str_AuxEqu( INCHI_SORT       *pINChISort,
                INCHI_SORT       *pINChISort2,
                INCHI_IOS_STRING *strbuf,
                int              *bOverflow,
                int              bOutType,
                int              TAUT_MODE,
                int              num_components,
                int              bSecondNonTautPass,
                int              bOmitRepetitions,
                int              bUseMulipliers )
{
    int          i, ii, ii2, nUsedLength0;
    INCHI_SORT   *is, *is2, *is0, *is20;
    INChI_Aux    *pINChI_Aux = NULL, *pINChI_Aux_Prev, *pINChI_Aux_Taut, *pINChI_Aux_Taut_Prev;
    int          mult, eq2prev, eq2taut, eq2tautPrev, bNext;
    const char  *pPrevEquStr, *pCurrEquStr;
    int         multPrevEquStr;
    pINChI_Aux_Prev = NULL;
    pINChI_Aux_Taut = NULL;
    pINChI_Aux_Taut_Prev = NULL;

    mult = 0;
    bNext = 0;
    is = NULL;
    is2 = NULL;
    is0 = pINChISort;
    is20 = bSecondNonTautPass ? pINChISort2 : NULL;
    /* djb-rwth: removing redundant code */
    eq2tautPrev = 1; /* pINChI_Aux_Prev (previous pINChI_Aux) does not exist */
    pPrevEquStr = NULL; /*, *pCurrEquStr;*/
    multPrevEquStr = 0;
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i = 0; i <= num_components; i++)
    {

        /* 1st (taut) pass: bOutType=OUT_TN  ; 2nd (non-taut pass) bOutType=OUT_NT */
        pINChI_Aux = ( i < num_components && ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) ) ? is->pINChI_Aux[ii] : NULL;
        if (bSecondNonTautPass)
        {
            /* component that was output on the 1st pass */
            pINChI_Aux_Taut = ( i < num_components && ( is2 = is20 + i, 0 <= ( ii2 = GET_II( OUT_T1, is2 ) ) ) ) ? is2->pINChI_Aux[ii2] : NULL;
        }
        /*================ compare non-iso non-taut equivalence info to non-iso taut ========*/
        eq2taut = bSecondNonTautPass && bOmitRepetitions &&
            Eql_INChI_Aux_Equ( pINChI_Aux, EQL_EQU, pINChI_Aux_Taut, EQL_EQU );
        eq2taut = eq2taut ? ( iiEQU | iitNONTAUT ) : 0;
        if (eq2taut)
        {
            /* we may be here only in case of the second (non-taut) pass */
            /* current non-taut equivalence has been found to be same as tautomeric */
            if (pINChI_Aux_Prev && pINChI_Aux_Prev->nNumberOfAtoms)
            {
                /* previous component exists */
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                if (bHasEquString( pINChI_Aux_Prev->nConstitEquNumbers, pINChI_Aux_Prev->nNumberOfAtoms ))
                {
                    /* output previous component(s) equivalence since it was found to be non-trivial */
                    MakeMult( mult + 1, "*", strbuf, 0, bOverflow );
                    MakeEquString( pINChI_Aux_Prev->nConstitEquNumbers,
                        pINChI_Aux_Prev->nNumberOfAtoms,
                        0, strbuf, TAUT_MODE, bOverflow );
                }
                else
                {
                    ; /* pINChI_Aux_Prev exists and has only trivial equivalence info */
                }
            }
            else
                if (pINChI_Aux_Taut_Prev && pINChI_Aux_Taut_Prev->nNumberOfAtoms)
                {
                    /* previous non-taut component exists only in taut list */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                }
            /* we have found pINChI_Aux->nConstitEquNumbers same as in pINChI_Aux_Taut */
            /* output this (current) equivalence as '*', that is, same as tautomeric */
            /* that was printed on the 1st pass. */
            pCurrEquStr = EquString( eq2taut );
            if (multPrevEquStr && pPrevEquStr)
            {
                if (pCurrEquStr && !strcmp( pCurrEquStr, pPrevEquStr ))
                {
                    multPrevEquStr++;
                }
                else
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = pCurrEquStr;
                    multPrevEquStr = 1;
                }
            }
            else
            {
                pPrevEquStr = pCurrEquStr;
                multPrevEquStr = 1;
            }
            pINChI_Aux_Prev = NULL; /* pINChI_Aux_Prev does not exist since */
            pINChI_Aux_Taut_Prev = NULL; /* pINChI_Aux has just been printed */
            mult = 0;
            eq2tautPrev = 1;
        }
        else
        {
            if (eq2tautPrev)
            {
                /* at this point pINChI_Aux_Prev does not exist; however, pINChI_Aux */
                /*might have been discovered and it is different from pINChI_Aux_Taut */
                if (multPrevEquStr && pPrevEquStr)
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = NULL;
                    multPrevEquStr = 0;
                }
                eq2tautPrev = 0;
                pINChI_Aux_Prev = pINChI_Aux;
                pINChI_Aux_Taut_Prev = pINChI_Aux_Taut;
                mult = 0;
            }
            else
            {
                /* check whether pINChI_Aux and pINChI_Aux_Prev have identical non-trivial equivalence info */
                eq2prev = bUseMulipliers &&
                    Eql_INChI_Aux_Equ( pINChI_Aux, EQL_EQU, pINChI_Aux_Prev, EQL_EQU );
                if (eq2prev)
                {
                    /* eq. info is same and non-trivial */
                    mult++; /* mult = (number of non-empty equal items)-1 */
                    continue;
                }
                else
                {
                    /* pINChI_Aux eq. info is either different or trivial. Output pINChI_Aux_Prev anyway */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    if (pINChI_Aux_Prev && pINChI_Aux_Prev->nNumberOfAtoms)
                    {
                        if (bHasEquString( pINChI_Aux_Prev->nConstitEquNumbers, pINChI_Aux_Prev->nNumberOfAtoms ))
                        {
                            /* pINChI_Aux_Prev exists and has equivalence info */
                            MakeMult( mult + 1, "*", strbuf, 0, bOverflow );
                            MakeEquString( pINChI_Aux_Prev->nConstitEquNumbers, pINChI_Aux_Prev->nNumberOfAtoms, 0,
                                strbuf, TAUT_MODE, bOverflow );
                        }
                        else
                        {
                            ; /* pINChI_Aux_Prev exists and has only trivial equivalence info */
                        }
                    }

                    else
                    {
                        if (bSecondNonTautPass && pINChI_Aux_Taut_Prev && pINChI_Aux_Taut_Prev->nNumberOfAtoms)
                        {
                            if (bHasEquString( pINChI_Aux_Taut_Prev->nConstitEquNumbers, pINChI_Aux_Taut_Prev->nNumberOfAtoms ))
                            {
                                /* since pINChI_Aux_Prev does not exist, pINChI_Aux_Taut_Prev is non-tautomeric */
                                /* and it has non-trivial equivalence info. This info has already been printed in the main section  */
                                /*
                                MakeDelim( sIdenticalValues, strbuf, bOverflow);
                                */
                            }
                            else
                            {
                                ; /* pINChI_Aux_Taut_Prev exists and has only trivial equivalence info */
                            }
                        }
#if ( bRELEASE_VERSION != 1 && defined(_DEBUG) )
                        else
                        {
                            int stop = 1;   /* <BRKPT> */
                        }
#endif
                    }

                }

                pINChI_Aux_Prev = pINChI_Aux;
                pINChI_Aux_Taut_Prev = pINChI_Aux_Taut;
                mult = 0; /* we do not know whether the item is empty */
            }
        }
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce tetrahedral stereo inversion substring of AuxInfo.
****************************************************************************/
int str_AuxInvSp3( INCHI_SORT       *pINChISort,
                   INCHI_SORT       *pINChISort2,
                   INCHI_IOS_STRING *strbuf,
                   int              *bOverflow,
                   int              bOutType,
                   int              TAUT_MODE,
                   int              num_components,
                   int              bSecondNonTautPass,
                   int              bOmitRepetitions,
                   int              bUseMulipliers )
{
    int          i, ii, ii2, nUsedLength0;
    INCHI_SORT   *is, *is2, *is0, *is20;
    INChI        *pINChI, *pINChI_Prev, *pINChI_Taut, *pINChI_Taut_Prev;
    INChI_Stereo *Stereo, *Stereo_Prev, *Stereo_Taut, *Stereo_Taut_Prev;
    int          mult, eq2prev, eq2taut, eq2tautPrev, bNext;
    const char  *pPrevEquStr, *pCurrEquStr;
    int         multPrevEquStr;
    /***************
    inverted sp3
    ****************/
    pINChI_Taut = NULL;
    pINChI_Prev = NULL;
    pINChI_Taut_Prev = NULL;
    mult = 0;
    bNext = 0;
    is = NULL;
    is2 = NULL;
    is0 = pINChISort;
    is20 = bSecondNonTautPass ? pINChISort2 : NULL;
    /* djb-rwth: removing redundant code */
    eq2tautPrev = 1; /* pINChI_Prev (previous pINChI) does not exist */
    pPrevEquStr = NULL; /*, *pCurrEquStr;*/
    multPrevEquStr = 0;
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i = 0; i <= num_components; i++)
    {

        /* 1st (taut) pass: bOutType=OUT_TN  ; 2nd (non-taut pass) bOutType=OUT_NT */
        pINChI = ( i < num_components && ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) ) ? is->pINChI[ii] : NULL;
        /*================ compare sp2 to previous =====================*/
        if (bSecondNonTautPass)
        {
            /* component that was output on the 1st pass */
            pINChI_Taut = ( i < num_components && ( is2 = is20 + i, 0 <= ( ii2 = GET_II( OUT_T1, is2 ) ) ) ) ? is2->pINChI[ii2] : NULL;
        }
        eq2taut = 0;
        /*========= if bSecondNonTautPass then compare iso non-taut stereo to other stereo ========*/
        if (bSecondNonTautPass && bOmitRepetitions)
        {
            /* compare non-tautomeric inverted to:
            *   a) tautomeric inverted
            *   b) Inverted(tautomeric)
            *   c) Inverted(non-tautomeric)
            */
            /* a) compare non-tautomeric inverted to tautomeric inverted */
            if (!eq2taut)
            {
                eq2taut = pINChI && pINChI_Taut &&
                    /* non-taut inverted */          /* taut invertedc */
                    ( Stereo = pINChI->Stereo ) && ( Stereo_Taut = pINChI_Taut->Stereo ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP3_INV, Stereo_Taut, EQL_SP3_INV, 0 );
                /* stereo-inv      non-taut =  taut (stereo-inv) */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iitNONTAUT ) : 0;
            }
            /* b) compare non-tautomeric inverted to Inverted(tautomeric stereo) */
            if (!eq2taut)
            {
                eq2taut = pINChI && pINChI_Taut &&
                    ( Stereo = pINChI->Stereo ) && ( Stereo_Taut = pINChI_Taut->Stereo ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP3_INV, Stereo_Taut, EQL_SP3, 0 );
                /* stereo-inv    non-taut =  Inv(taut stereo) */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iitNONTAUT | iiEq2INV ) : 0;
            }
            /* c) compare non-tautomeric inverted to Inverted(non-tautomeric stereo) */
            if (!eq2taut)
            {
                eq2taut = pINChI &&
                    ( Stereo = pINChI->Stereo ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP3_INV, Stereo, EQL_SP3, 0 );
                /* stereo-inv    non-taut =  Inv(non-taut stereo) */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iitNONTAUT | iiEq2INV | iiEq2NONTAUT ) : 0;
            }
#if ( FIX_EMPTY_LAYER_BUG == 1 )
            if (!eq2taut && pINChI && pINChI_Taut &&
                !( ( Stereo = pINChI->Stereo ) && Eql_INChI_Stereo( Stereo, EQL_SP3_INV, NULL, EQL_EXISTS, 0 ) ))
            {
                if (( Stereo_Taut = pINChI_Taut->Stereo ) &&
                    Eql_INChI_Stereo( Stereo_Taut, EQL_SP3, NULL, EQL_EXISTS, 0 ))
                {

                    eq2taut = iiEmpty; /* the current is empty while the preceding (taut) is not */
                }
            }
#endif
        }
        else
            /*========= if not bSecondNonTautPass then compare inv taut stereo to various taut stereo ========*/
            if (!bSecondNonTautPass && bOmitRepetitions)
            {
                /* compare tautomeric inverted to Invetred(tautomeric) */
                if (!eq2taut)
                {
                    eq2taut = pINChI &&
                        ( Stereo = pINChI->Stereo ) &&
                        Eql_INChI_Stereo( Stereo, EQL_SP3_INV, Stereo, EQL_SP3, 0 );
                    /* stereo     isotopic taut =  taut (stereo) */
                    eq2taut = eq2taut ? ( iiSTEREO_INV | iiEq2INV ) : 0;
                }
            }
        if (eq2taut)
        {
            /* we may be here only in case of the current layer found equal in another layer the same component */
            if (pINChI_Prev && pINChI_Prev->nNumberOfAtoms)
            {
                /* previous component exists; output it before output the current component */
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                if (( Stereo_Prev = pINChI_Prev->Stereo ) && Stereo_Prev->nNumberOfStereoCenters > 0)
                {
                    MakeMult( mult + 1, "*", strbuf, 0, bOverflow );

                    MakeStereoString( Stereo_Prev->nNumber, NULL, Stereo_Prev->t_parityInv,
                        0, Stereo_Prev->nNumberOfStereoCenters,
                        strbuf, TAUT_MODE, bOverflow );
                }
            }
            else
                if (pINChI_Taut_Prev && pINChI_Taut_Prev->nNumberOfAtoms)
                {
                    /* previous non-taut component exists only in taut list */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    /* do not output stereo of non-tautomeric in non-taut layer: it has been output in the main layer */
                }
            /* we have found another (previously printed) layer of the current component equal to this layer */
            /* output this (current) equivalence mark = EquString(eq2taut) */
            pCurrEquStr = EquString( eq2taut );
            if (multPrevEquStr && pPrevEquStr)
            {
                if (pCurrEquStr && !strcmp( pCurrEquStr, pPrevEquStr ))
                {
                    multPrevEquStr++;
                }
                else
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = pCurrEquStr;
                    multPrevEquStr = 1;
                }
            }
            else
            {
                pPrevEquStr = pCurrEquStr;
                multPrevEquStr = 1;
            }
            pINChI_Prev = NULL; /* pINChI_Prev sp2 does not exist since */
            pINChI_Taut_Prev = NULL; /* pINChI has just been printed */
            mult = 0;
            eq2tautPrev = 1;     /* pINChI_Prev and pINChI_Taut_Prev have already been output */
        }
        else
            if (eq2tautPrev)
            {
                /* at this point pINChI_Prev does not exist; however, pINChI */
                /*might have been discovered and it is different from pINChI_Taut */
                if (multPrevEquStr && pPrevEquStr)
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = NULL;
                    multPrevEquStr = 0;
                }
                eq2tautPrev = 0;
                pINChI_Prev = pINChI;
                pINChI_Taut_Prev = pINChI_Taut;
                mult = 0;
            }
            else
            {
                /* current layer is different from previously printed layers of the current component */
                /* compare the current layer to this layer of the previous component: */
                /* check whether pINChI and pINChI_Prev have non-zero identical stereo sp2 */
                /*================ compare iso sp3 to previous =====================*/
                eq2prev = bUseMulipliers &&
                    pINChI && pINChI_Prev &&
                    /* do both have stereo? */
                    ( Stereo = pINChI->Stereo ) && ( Stereo_Prev = pINChI_Prev->Stereo ) &&
                    /* is their inverted stereo same? */
                    Eql_INChI_Stereo( Stereo, EQL_SP3_INV, Stereo_Prev, EQL_SP3_INV, 0 );
                if (eq2prev)
                {
                    mult++; /* mult = (number of non-empty equal items)-1 */
                    continue;
                }
                else
                {
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    if (pINChI_Prev && pINChI_Prev->nNumberOfAtoms)
                    {
                        if (( Stereo_Prev = pINChI_Prev->Stereo ) &&
                            Stereo_Prev->nNumberOfStereoCenters > 0 && Stereo_Prev->nCompInv2Abs)
                        {
                            MakeMult( mult + 1, "*", strbuf, 0, bOverflow );

                            MakeStereoString( Stereo_Prev->nNumberInv, NULL, Stereo_Prev->t_parityInv,
                                0, Stereo_Prev->nNumberOfStereoCenters,
                                strbuf, TAUT_MODE, bOverflow );
                        }
                        /* else sp3 info is not present in pINChI_Prev */
                    }
                    else
                        /* do not print pINChI_Prev because it either do not exist of have already been printed */
                        if (bSecondNonTautPass && pINChI_Taut_Prev && pINChI_Taut_Prev->nNumberOfAtoms)
                        {
                            if (( Stereo_Taut_Prev = pINChI_Taut_Prev->Stereo ) &&
                                Stereo_Taut_Prev->nNumberOfStereoCenters > 0 && Stereo_Taut_Prev->nCompInv2Abs)
                            {
                                /* since pINChI_Prev does not exist, pINChI_Taut_Prev is non-tautomeric */
                                /* and it has non-trivial inv sp3 info. It has already been printed in the main section */
                                /*
                                MakeDelim( sIdenticalValues, strbuf, bOverflow);
                                */
                                ;/* pINChI_Taut_Prev sp3 info was output in the main stereo section */
                            }
                            else
                            {
                                ; /* pINChI_Taut_Prev exists and has not sp3 info */
                            }
                        }
#if ( bRELEASE_VERSION != 1 && defined(_DEBUG) )
                        else
                        {
                            int stop = 1;   /* <BRKPT> */
                        }
#endif
                }
                pINChI_Prev = pINChI;
                mult = 0; /* we do not know whether the item is empty */
            }
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce tetrahedral stereo inversion numbering substring of AuxInfo
  /iN: in Main and/or Isotopic and/or FixedH-Iso parts,
  in both normal and reconnected layers
****************************************************************************/
int str_AuxInvSp3Numb( CANON_GLOBALS    *pCG,
                       INCHI_SORT       *pINChISort,
                       INCHI_SORT       *pINChISort2,
                       INCHI_IOS_STRING *strbuf,
                       int              *bOverflow,
                       int              bOutType,
                       int              TAUT_MODE,
                       int              num_components,
                       int              bSecondNonTautPass,
                       int               bOmitRepetitions )
{
    int          i, ii, ii2, nUsedLength0;
    INCHI_SORT   *is, *is0 /*, *is2*/;
    INChI        *pINChI, *pINChI_Taut;
    INChI_Aux    *pINChI_Aux, *pINChI_Aux_Taut; /* djb-rwth: removing redundant variables */
    INChI_Stereo *Stereo, *Stereo_Taut;
    int          eq2taut, bNext;
    const char  *pPrevEquStr, *pCurrEquStr;
    int         multPrevEquStr;
    /**************************************************
    * specificity of numbering: there is no previous *
    * component because no repetition is possible    *
    **************************************************/
    pINChI = NULL;
    pINChI_Taut = NULL;
    pINChI_Aux = NULL;
    pINChI_Aux_Taut = NULL;
    /* djb-rwth: removing redundant code */
    bNext = 0;
    is = NULL;
    is0 = pINChISort;
    /*is2         = bSecondNonTautPass? pINChISort2 : NULL;*/
    /* djb-rwth: removing redundant code */
    pPrevEquStr = NULL; /*, *pCurrEquStr;*/
    multPrevEquStr = 0;
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i = 0; i < num_components; i++)
    {

        /* 1st (taut) pass: bOutType=OUT_TN  ; 2nd (non-taut pass) bOutType=OUT_NT */
        is = is0 + i;
        pINChI = ( 0 <= ( ii = GET_II( bOutType, is ) ) ) ? is->pINChI[ii] : NULL;
        pINChI_Aux = pINChI ? is->pINChI_Aux[ii] : NULL;
        /*================ to compare to previously printed =====================*/
        if (bSecondNonTautPass)
        {
            /* component that was printed on the 1st pass */
            pINChI_Taut = ( 0 <= ( ii2 = GET_II( OUT_T1, is ) ) ) ? is->pINChI[ii2] : NULL;
            pINChI_Aux_Taut = pINChI_Taut ? is->pINChI_Aux[ii2] : NULL;
        }

        eq2taut = 0;
        /*========= if bSecondNonTautPass then compare inv non-taut stereo to other stereo ========*/
        if (bSecondNonTautPass && bOmitRepetitions &&
            pINChI && ( Stereo = pINChI->Stereo ) && Stereo->nCompInv2Abs)
        {
            /* compare non-tautomeric inverted stereo numbering to:
            *   a) tautomeric numbering
            *   b) non-tautomeric numbering
            *   c) tautomeric inverted stereo numbering
            */
            /* a) compare non-tautomeric inverted stereo numbering to tautomeric numbering */
            if (!eq2taut)
            {
                eq2taut = pINChI_Taut &&
                    Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_INV, pINChI_Aux_Taut, EQL_NUM );
                /* stereo-inv     numbering  non-taut =  taut numbering */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iiNUMB | iitNONTAUT ) : 0;
            }
            /* b) compare non-tautomeric inverted stereo numbering to non-tautomeric numbering */
            if (!eq2taut)
            {
                eq2taut =
                    Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_INV, pINChI_Aux, EQL_NUM );
                /* stereo-inv     numb.     non-taut =  non-taut numbering */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iiNUMB | iitNONTAUT | iiEq2NONTAUT ) : 0;
            }
            /* c) compare non-tautomeric inverted stereo numbering to tautomeric inverted stereo numbering */
            if (!eq2taut)
            {
                eq2taut = pINChI_Taut &&
                    ( Stereo_Taut = pINChI_Taut->Stereo ) && Stereo_Taut->nCompInv2Abs &&
                    Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_INV, pINChI_Aux_Taut, EQL_NUM_INV );
                /* stereo-inv     numb.     non-taut =  taut inv stereo numbering */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iiNUMB | iitNONTAUT | iiEq2INV ) : 0;
            }
        }
        else
        {
            /*========= if not bSecondNonTautPass then compare inv taut stereo numb to taut numb ========*/
            if (!bSecondNonTautPass && bOmitRepetitions &&
                pINChI && ( Stereo = pINChI->Stereo ) && Stereo->nCompInv2Abs)
            {
                /* compare tautomeric inverted stereo numbering to tautomeric numbering */
                if (!eq2taut)
                {
                    eq2taut =
                        Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_INV, pINChI_Aux, EQL_NUM );
                    /* stereo-inv     numbering  (taut) =  taut numbering */
                    eq2taut = eq2taut ? ( iiSTEREO_INV | iiNUMB ) : 0;
                }
            }
        }
        if (eq2taut)
        {
            /* we have found another (previously printed) layer of the current component equal to this layer */
            /* output this (current) equivalence mark = EquString(eq2taut) */
            pCurrEquStr = EquString( eq2taut );
            if (multPrevEquStr && pPrevEquStr)
            {
                if (pCurrEquStr && !strcmp( pCurrEquStr, pPrevEquStr ))
                {
                    multPrevEquStr++;
                }
                else
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = pCurrEquStr;
                    multPrevEquStr = 1;
                }
            }
            else
            {
                pPrevEquStr = pCurrEquStr;
                multPrevEquStr = 1;
            }
        }
        else
        {
            /* current layer is different from previously printed layers of the current component */
            if (multPrevEquStr && pPrevEquStr)
            {
                /* new EqStr is different; output it */
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                pPrevEquStr = NULL;
                multPrevEquStr = 0;
            }
            if (bNext++)
            {
                MakeDelim( sCompDelim, strbuf, bOverflow );
            }
            if (pINChI && pINChI_Aux && pINChI_Aux->nNumberOfAtoms &&
                ( Stereo = pINChI->Stereo ) && Stereo->nNumberOfStereoCenters &&
                Stereo->nCompInv2Abs && pINChI_Aux->nOrigAtNosInCanonOrdInv)
            {
                MakeCtString( pCG, pINChI_Aux->nOrigAtNosInCanonOrdInv,
                    pINChI_Aux->nNumberOfAtoms, 0, NULL, 0,
                    strbuf, TAUT_MODE, bOverflow );
            }
            /* else inv stereo info is not present in pINChI */
        }
    }

    if (multPrevEquStr && pPrevEquStr)
    {
        /* the new EqStr of the last item has not been printed; output it now */
        if (bNext++)
        {
            MakeDelim( sCompDelim, strbuf, bOverflow );
        }
        MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
        pPrevEquStr = NULL;
        /* djb-rwth: removing redundant code */
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce isotopic numbering substring of AuxInfo
  /I: in Isotopic and/or FixedH-Iso parts,
  in both normal and reconnected layers
****************************************************************************/
int str_AuxIsoNumb( CANON_GLOBALS    *pCG,
                    INCHI_SORT       *pINChISort,
                    INCHI_SORT       *pINChISort2,
                    INCHI_IOS_STRING *strbuf,
                    int              *bOverflow,
                    int              bOutType,
                    int              TAUT_MODE,
                    int              num_components,
                    int              bSecondNonTautPass,
                    int              bOmitRepetitions )
{
    int          i, ii, ii2, nUsedLength0;
    INCHI_SORT   *is, *is0 /*, *is2*/;
    /* djb-rwth: removing redundant variables */
    INChI_Aux    *pINChI_Aux, *pINChI_Aux_Taut; /* djb-rwth: removing redundant variables */
    int          eq2taut, bNext;
    const char  *pPrevEquStr, *pCurrEquStr;
    int         multPrevEquStr;
    /**************************************************
    * specificity of numbering: there is no previous *
    * component because no repetition is possible    *
    **************************************************/
    /* djb-rwth: removing redundant code */
    pINChI_Aux = NULL;
    pINChI_Aux_Taut = NULL;
    /* djb-rwth: removing redundant code */
    bNext = 0;
    is = NULL;
    is0 = pINChISort;
    /*is2         = bSecondNonTautPass? pINChISort2 : NULL;*/
    /* djb-rwth: removing redundant code */
    pPrevEquStr = NULL; /*, *pCurrEquStr;*/
    multPrevEquStr = 0;
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i = 0; i < num_components; i++)
    {

        /* 1st (taut) pass: bOutType=OUT_TN  ; 2nd (non-taut pass) bOutType=OUT_NT */
        is = is0 + i;
        pINChI_Aux = ( i < num_components && 0 <= ( ii = GET_II( bOutType, is ) ) ) ? is->pINChI_Aux[ii] : NULL;
        /*================ to compare to previously printed =====================*/
        if (bSecondNonTautPass)
        {
            pINChI_Aux_Taut = ( 0 <= ( ii2 = GET_II( OUT_T1, is ) ) ) ? is->pINChI_Aux[ii2] : NULL;
        }
        eq2taut = 0;
        /*========= if bSecondNonTautPass then compare iso non-taut numb to other numb ========*/
        if (bSecondNonTautPass && bOmitRepetitions && pINChI_Aux && pINChI_Aux->bIsIsotopic)
        {
            /* compare non-tautomeric isotopic numbering to:
            *   a) tautomeric numbering
            *   b) non-tautomeric numbering
            *   c) tautomeric isotopic numbering
            */
            /* a) compare non-tautomeric isotopic numbering to tautomeric numbering */
            if (!eq2taut)
            {
                eq2taut = Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_ISO, pINChI_Aux_Taut, EQL_NUM );
                /* numbering  non-taut isotopic =  taut numbering */
                eq2taut = eq2taut ? ( iiNUMB | iitNONTAUT | iitISO ) : 0;
            }
            /* b) compare non-tautomeric isotopic numbering to non-tautomeric numbering */
            if (!eq2taut)
            {
                eq2taut = Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_ISO, pINChI_Aux, EQL_NUM );
                /* numbering  non-taut isotopic =  non-taut numbering */
                eq2taut = eq2taut ? ( iiNUMB | iitNONTAUT | iitISO | iiEq2NONTAUT ) : 0;
            }
            /* c) compare non-tautomeric isotopic numbering to tautomeric isotopic numbering */
            if (!eq2taut)
            {
                eq2taut = Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_ISO, pINChI_Aux_Taut, EQL_NUM_ISO );
                /* numbering  non-taut isotopic =  taut isotopic numbering */
                eq2taut = eq2taut ? ( iiNUMB | iitNONTAUT | iitISO | iiEq2ISO ) : 0;
            }
        }
        else
        {
            /*    2011-10-28
            Fix bug in src:cano mapping of  atoms printed to AuxInfo
            Reported by Sandor Mark on 2011-10-25 in inchi-discuss
            See http://sourceforge.net/p/inchi/mailman/message/28292914/ also
            */
#define AUX_ISO_NUMB_BUG_FIX
#ifdef AUX_ISO_NUMB_BUG_FIX
            /* Bug-fixed version */
            /*========= if not bSecondNonTautPass then compare isotopic taut numbering to taut numbering ========*/
            if (!bSecondNonTautPass && bOmitRepetitions && pINChI_Aux && pINChI_Aux->bIsIsotopic)
            {
                /* compare tautomeric isotopic numbering to tautomeric non-isotopic numbering */
                if (!eq2taut)
                {
                    eq2taut = Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_ISO, pINChI_Aux, EQL_NUM );
                    /*  numbering isotopic (taut) =  taut numbering */
                    eq2taut = eq2taut ? ( iiNUMB | iitISO ) : 0;
                }
            }
#else
            /* Original (buggy) version */

            /*========= if not bSecondNonTautPass then compare inv taut stereo numb to taut numb ========*/
            if (!bSecondNonTautPass && bOmitRepetitions && pINChI_Aux && pINChI_Aux->bIsIsotopic)
            {
                /* compare tautomeric isotopic numbering to tautomeric non-isotopic numbering */
                if (!eq2taut)
                {
                    eq2taut = Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_ISO, pINChI_Aux, EQL_NUM_ISO );
                    /* stereo-inv     numbering  (taut) =  taut numbering */
                    eq2taut = eq2taut ? ( iiSTEREO_INV | iiNUMB ) : 0;
                }
            }
#endif
        }

        if (eq2taut)
        {
            /* we have found another (previously printed) layer of the current component equal to this layer */
            /* output this (current) equivalence mark = EquString(eq2taut) */
            pCurrEquStr = EquString( eq2taut );
            if (multPrevEquStr && pPrevEquStr)
            {
                if (pCurrEquStr && !strcmp( pCurrEquStr, pPrevEquStr ))
                {
                    multPrevEquStr++;
                }
                else
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = pCurrEquStr;
                    multPrevEquStr = 1;
                }
            }
            else
            {
                pPrevEquStr = pCurrEquStr;
                multPrevEquStr = 1;
            }
        }
        else
        {
            /* current layer is different from previously printed layers of the current component */
            if (multPrevEquStr && pPrevEquStr)
            {
                /* new EqStr is different; output it */
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                pPrevEquStr = NULL;
                multPrevEquStr = 0;
            }
            if (bNext++)
            {
                MakeDelim( sCompDelim, strbuf, bOverflow );
            }
            if (pINChI_Aux && pINChI_Aux->nNumberOfAtoms && pINChI_Aux->bIsIsotopic &&
                pINChI_Aux->nIsotopicOrigAtNosInCanonOrd)
            {
                MakeCtString( pCG, pINChI_Aux->nIsotopicOrigAtNosInCanonOrd,
                    pINChI_Aux->nNumberOfAtoms,
                    0, NULL, 0, strbuf, TAUT_MODE, bOverflow );
            }
            /* else isotopic numbering is not present in pINChI */
        }
    }

    if (multPrevEquStr && pPrevEquStr)
    {
        /* the new EqStr of the last item has not been printed; output it now */
        if (bNext++)
        {
            MakeDelim( sCompDelim, strbuf, bOverflow );
        }
        MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
        pPrevEquStr = NULL;
        /* djb-rwth: removing redundant code */
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce isotopic equivalence substring of AuxInfo.
****************************************************************************/
int str_AuxIsoEqu( INCHI_SORT       *pINChISort,
                   INCHI_SORT       *pINChISort2,
                   INCHI_IOS_STRING *strbuf,
                   int              *bOverflow,
                   int              bOutType,
                   int              TAUT_MODE,
                   int              num_components,
                   int              bSecondNonTautPass,
                   int              bOmitRepetitions,
                   int              bUseMulipliers )
{
    int          i, ii, ii2, nUsedLength0;
    INCHI_SORT   *is, *is2, *is0, *is20;
    INChI_Aux    *pINChI_Aux, *pINChI_Aux_Prev, *pINChI_Aux_Taut, *pINChI_Aux_Taut_Prev;
    int          mult, eq2prev, eq2taut, eq2tautPrev, bNext;
    const char  *pPrevEquStr, *pCurrEquStr;
    int         multPrevEquStr;
    pINChI_Aux = NULL;
    pINChI_Aux_Prev = NULL;
    pINChI_Aux_Taut = NULL;
    pINChI_Aux_Taut_Prev = NULL;
    mult = 0;
    bNext = 0;
    is = NULL;
    is2 = NULL;
    is0 = pINChISort;
    is20 = bSecondNonTautPass ? pINChISort2 : NULL;
    /* djb-rwth: removing redundant code */
    eq2tautPrev = 1; /* pINChI_Aux_Prev (previous pINChI_Aux) does not exist */
    pPrevEquStr = NULL; /*, *pCurrEquStr;*/
    multPrevEquStr = 0;
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i = 0; i <= num_components; i++)
    {

        /* 1st (taut) pass: bOutType=OUT_TN  ; 2nd (non-taut pass) bOutType=OUT_NT */
        pINChI_Aux = ( i < num_components && ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) ) ? is->pINChI_Aux[ii] : NULL;
        if (bSecondNonTautPass)
        {
            /* component that was output on the 1st pass */
            pINChI_Aux_Taut = ( i < num_components && ( is2 = is20 + i, 0 <= ( ii2 = GET_II( OUT_T1, is2 ) ) ) ) ? is2->pINChI_Aux[ii2] : NULL;
        }
        /*================ compare iso non-taut equivalence info to non-iso taut ========*/
        eq2taut = 0;
        if (bSecondNonTautPass && bOmitRepetitions && pINChI_Aux && pINChI_Aux->bIsIsotopic)
        {
            /**************************************************
            * compare isotopic non-tautomeric equivalence to:
            *    a) tautomeric
            *    b) non-tautomeric
            *    c) isotopic tautomeric
            */
            if (!eq2taut)
            {
                /* compare isotopic non-tautomeric equivalence to tautomeric */
                eq2taut = Eql_INChI_Aux_Equ( pINChI_Aux, EQL_EQU_ISO, pINChI_Aux_Taut, EQL_EQU );
                /* equ   non-taut     isotopic = tautomeric*/
                eq2taut = eq2taut ? ( iiEQU | iitNONTAUT | iitISO ) : 0;
            }
            if (!eq2taut)
            {
                /* compare isotopic non-tautomeric equivalence to non-tautomeric */
                eq2taut = Eql_INChI_Aux_Equ( pINChI_Aux, EQL_EQU_ISO, pINChI_Aux, EQL_EQU );
                /* equ  non-taut    isotopic = non-tautomeric*/
                eq2taut = eq2taut ? ( iiEQU | iitNONTAUT | iitISO | iiEq2NONTAUT ) : 0;
            }
            if (!eq2taut)
            {
                /* compare isotopic non-tautomeric equivalence to isotopic tautomeric */
                eq2taut = Eql_INChI_Aux_Equ( pINChI_Aux, EQL_EQU_ISO, pINChI_Aux_Taut, EQL_EQU_ISO );
                /* equ   non-taut     isotopic = isotopic tautomeric*/
                eq2taut = eq2taut ? ( iiEQU | iitNONTAUT | iitISO | iiEq2ISO ) : 0;
            }
        }
        else
        {
            if (!bSecondNonTautPass && bOmitRepetitions && pINChI_Aux && pINChI_Aux->bIsIsotopic)
            {
                /**************************************************
                * compare isotopic tautomeric equivalence to:
                *    a) non-isotopic tautomeric
                */
                if (!eq2taut)
                {
                    /* compare isotopic tautomeric equivalence to tautomeric */
                    eq2taut = Eql_INChI_Aux_Equ( pINChI_Aux, EQL_EQU_ISO, pINChI_Aux, EQL_EQU );
                    /* equ   taut-isotopic = tautomeric*/
                    eq2taut = eq2taut ? ( iiEQU | iitISO ) : 0;
                }
            }
        }
        if (eq2taut)
        {
            /* we may be here only in case of the second (non-taut) pass */
            /* current non-taut equivalence has been found to be same as tautomeric */
            if (pINChI_Aux_Prev && pINChI_Aux_Prev->nNumberOfAtoms)
            {
                /* previous component exists */
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                if (bHasEquString( pINChI_Aux_Prev->nConstitEquIsotopicNumbers, pINChI_Aux_Prev->nNumberOfAtoms ))
                {
                    /* output previous component(s) equivalence since it was found to be non-trivial */
                    MakeMult( mult + 1, "*", strbuf, 0, bOverflow );
                    MakeEquString( pINChI_Aux_Prev->nConstitEquIsotopicNumbers, pINChI_Aux_Prev->nNumberOfAtoms, 0,
                        strbuf, TAUT_MODE, bOverflow );
                }
                else
                {
                    ; /* pINChI_Aux_Prev exists and has only trivial equivalence info */
                }
            }
            else
            {
                if (pINChI_Aux_Taut_Prev && pINChI_Aux_Taut_Prev->nNumberOfAtoms)
                {
                    /* previous non-taut component exists only in taut list */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                }
            }
            /* we have found pINChI_Aux->pINChI_Aux->nConstitEquIsotopicNumbers same as in pINChI_Aux_Taut */
            /* output this (current) equivalence as '*', that is, same as tautomeric */
            /* that was printed on the 1st pass. */
            pCurrEquStr = EquString( eq2taut );
            if (multPrevEquStr && pPrevEquStr)
            {
                if (pCurrEquStr && !strcmp( pCurrEquStr, pPrevEquStr ))
                {
                    multPrevEquStr++;
                }
                else
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = pCurrEquStr;
                    multPrevEquStr = 1;
                }
            }
            else
            {
                pPrevEquStr = pCurrEquStr;
                multPrevEquStr = 1;
            }
            pINChI_Aux_Prev = NULL; /* pINChI_Aux_Prev does not exist since */
            pINChI_Aux_Taut_Prev = NULL; /* pINChI_Aux has just been printed */
            mult = 0;
            eq2tautPrev = 1;
        }
        else
        {
            if (eq2tautPrev)
            {
                /* at this point pINChI_Aux_Prev does not exist; however, pINChI_Aux */
                /*might have been discovered and it is different from pINChI_Aux_Taut */
                if (multPrevEquStr && pPrevEquStr)
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = NULL;
                    multPrevEquStr = 0;
                }
                eq2tautPrev = 0;
                pINChI_Aux_Prev = pINChI_Aux;
                pINChI_Aux_Taut_Prev = pINChI_Aux_Taut;
                mult = 0;
            }
            else
            {
                /* check whether pINChI_Aux and pINChI_Aux_Prev have identical non-trivial equivalence info */
                eq2prev = bUseMulipliers && Eql_INChI_Aux_Equ( pINChI_Aux, EQL_EQU_ISO, pINChI_Aux_Prev, EQL_EQU_ISO );
                if (eq2prev)
                {
                    /* eq. info is same and non-trivial */
                    mult++; /* mult = (number of non-empty equal items)-1 */
                    continue;
                }
                else
                {
                    /* pINChI_Aux eq. info is either different or trivial. Output pINChI_Aux_Prev anyway */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    if (pINChI_Aux_Prev && pINChI_Aux_Prev->nNumberOfAtoms)
                    {
                        if (bHasEquString( pINChI_Aux_Prev->nConstitEquIsotopicNumbers, pINChI_Aux_Prev->nNumberOfAtoms ))
                        {
                            /* pINChI_Aux_Prev exists and has equivalence info */
                            MakeMult( mult + 1, "*", strbuf, 0, bOverflow );
                            MakeEquString( pINChI_Aux_Prev->nConstitEquIsotopicNumbers, pINChI_Aux_Prev->nNumberOfAtoms, 0,
                                strbuf, TAUT_MODE, bOverflow );
                        }
                        else
                        {
                            ; /* pINChI_Aux_Prev exists and has only trivial equivalence info */
                        }
                    }
                    else
                    {
                        if (bSecondNonTautPass && pINChI_Aux_Taut_Prev && pINChI_Aux_Taut_Prev->nNumberOfAtoms)
                        {
                            if (bHasEquString( pINChI_Aux_Taut_Prev->nConstitEquIsotopicNumbers, pINChI_Aux_Taut_Prev->nNumberOfAtoms ))
                            {
                                /* since pINChI_Aux_Prev does not exist, pINChI_Aux_Taut_Prev is non-tautomeric */
                                /* and it has non-trivial equivalence info. This info has already been printed in the main section  */
                                /*
                                MakeDelim( sIdenticalValues, strbuf, bOverflow);
                                */
                            }
                            else
                            {
                                ; /* pINChI_Aux_Taut_Prev exists and has only trivial equivalence info */
                            }
                        }
#if ( bRELEASE_VERSION != 1 && defined(_DEBUG) )
                        else
                        {
                            int stop = 1;   /* <BRKPT> */
                        }
#endif
                    }
                }
                pINChI_Aux_Prev = pINChI_Aux;
                pINChI_Aux_Taut_Prev = pINChI_Aux_Taut;
                mult = 0; /* we do not know whether the item is empty */
            }
        }
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce isotopic tetr stereo inversion substring of AuxInfo.
****************************************************************************/
int str_AuxInvIsoSp3( INCHI_SORT       *pINChISort,
                      INCHI_SORT       *pINChISort2,
                      INCHI_IOS_STRING *strbuf,
                      int              *bOverflow,
                      int              bOutType,
                      int              TAUT_MODE,
                      int              num_components,
                      int              bSecondNonTautPass,
                      int              bOmitRepetitions,
                      int              bUseMulipliers )
{
    int          i, ii, ii2, nUsedLength0;
    INCHI_SORT   *is, *is2, *is0, *is20;
    INChI        *pINChI, *pINChI_Prev, *pINChI_Taut, *pINChI_Taut_Prev;
    INChI_Stereo *Stereo, *Stereo_Prev, *Stereo_Taut, *Stereo_Taut_Prev;
    int          mult, eq2prev, eq2taut, eq2tautPrev, bNext;
    const char  *pPrevEquStr, *pCurrEquStr;
    int         multPrevEquStr;
    /********************************
    inverted isotopic sp3
    *********************************/
    pINChI_Taut = NULL;
    pINChI_Prev = NULL;
    pINChI_Taut_Prev = NULL;
    mult = 0;
    bNext = 0;
    is = NULL;
    is2 = NULL;
    is0 = pINChISort;
    is20 = bSecondNonTautPass ? pINChISort2 : NULL;
    /* djb-rwth: removing redundant code */
    eq2tautPrev = 1; /* pINChI_Prev (previous pINChI) does not exist */
    pPrevEquStr = NULL; /*, *pCurrEquStr;*/
    multPrevEquStr = 0;
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i = 0; i <= num_components; i++)
    {

        /* 1st (taut) pass: bOutType=OUT_TN  ; 2nd (non-taut pass) bOutType=OUT_NT */
        pINChI = ( i < num_components && ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) ) ? is->pINChI[ii] : NULL;
        /*================ compare sp2 to previous =====================*/
        if (bSecondNonTautPass)
        {
            /* component that was output on the 1st pass */
            pINChI_Taut = ( i < num_components && ( is2 = is20 + i, 0 <= ( ii2 = GET_II( OUT_T1, is2 ) ) ) ) ? is2->pINChI[ii2] : NULL;
        }
        eq2taut = 0;
        /*========= if bSecondNonTautPass then compare iso non-taut stereo to other stereo ========*/
        if (bSecondNonTautPass && bOmitRepetitions && pINChI && pINChI->nNumberOfIsotopicAtoms + pINChI->nNumberOfIsotopicTGroups > 0)
        {
            /* compare non-tautomeric isotopic inverted to:
            *   a) tautomeric inverted
            *   b) *non-tautomeric inverted
            *   c) *isotopic tautomeric inverted
            *   d) Inverted(tautomeric)
            *   e) *Inverted(tautomeric isotopic)
            *   f) Inverted(non-tautomeric)
            *   g) *Inverted(non-tautomeric isotopic)
            */
            /* a) compare non-tautomeric isotopic inverted to tautomeric inverted */
            if (!eq2taut)
            {
                eq2taut = pINChI && pINChI_Taut &&
                    /* non-taut inverted */          /* taut invertedc */
                    ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Taut = pINChI_Taut->Stereo ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP3_INV, Stereo_Taut, EQL_SP3_INV, 0 );
                /* stereo-inv    isotopic  non-taut =  taut (stereo-inv) */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iitNONTAUT ) : 0;
            }
            /* b) compare non-tautomeric isotopic inverted to non-tautomeric inverted */
            if (!eq2taut)
            {
                eq2taut = pINChI &&                    /* it is non-taut non-iso stereo */
                    ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Taut = pINChI->Stereo ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP3_INV, Stereo_Taut, EQL_SP3_INV, 0 );
                /* stereo-inv    isotopic non-taut =  non-taut stereo-inv */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iitNONTAUT | iiEq2NONTAUT ) : 0;
            }
            /* c) compare non-tautomeric isotopic inverted to isotopic tautomeric inverted */
            if (!eq2taut)
            {
                eq2taut = pINChI && pINChI_Taut &&
                    /* non-taut iso. inverted */             /* taut iso. inverted */
                    ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Taut = pINChI_Taut->StereoIsotopic ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP3_INV, Stereo_Taut, EQL_SP3_INV, 0 );
                /* stereo-inv    isotopic  non-taut =  taut iso. stereo-inv */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iitNONTAUT | iiEq2ISO ) : 0;
            }
            /* d) compare non-tautomeric inverted to Inverted(tautomeric stereo) */
            if (!eq2taut)
            {
                eq2taut = pINChI && pINChI_Taut &&
                    ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Taut = pINChI_Taut->Stereo ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP3_INV, Stereo_Taut, EQL_SP3_INV, 0 );
                /* stereo-inv   isotopic  non-taut =  Inv(non-iso taut stereo) */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iitNONTAUT | iiEq2INV ) : 0;
            }
            /* e) compare non-tautomeric inverted to Inverted(isotopic tautomeric stereo) */
            if (!eq2taut)
            {
                eq2taut = pINChI && pINChI_Taut &&
                    ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Taut = pINChI_Taut->StereoIsotopic ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP3_INV, Stereo_Taut, EQL_SP3, 0 );
                /* stereo-inv   isotopic  non-taut =  Inv(iso taut stereo) */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iitNONTAUT | iiEq2INV | iiEq2ISO ) : 0;
            }
            /* f) compare non-tautomeric isotopic inverted to Inverted(non-tautomeric stereo) */
            if (!eq2taut)
            {
                eq2taut = pINChI &&                    /* it is non-taut non-iso stereo */
                    ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Taut = pINChI->Stereo ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP3_INV, Stereo_Taut, EQL_SP3, 0 );
                /* stereo-inv   isotopic    non-taut =  Inv(non-taut stereo) */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iitNONTAUT | iiEq2INV | iiEq2NONTAUT ) : 0;
            }
            /* g) compare non-tautomeric isotopic inverted to Inverted(non-tautomeric isotopic stereo) */
            if (!eq2taut)
            {
                eq2taut = pINChI &&                    /* it is non-taut non-iso stereo */
                    ( Stereo = pINChI->StereoIsotopic ) &&
                    Eql_INChI_Stereo( Stereo, EQL_SP3_INV, Stereo, EQL_SP3, 0 );
                /* stereo-inv    isotopic  non-taut =   Inv( iso non-taut stereo) */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iitNONTAUT | iiEq2INV | iiEq2ISO | iiEq2NONTAUT ) : 0;
            }
#if ( FIX_EMPTY_LAYER_BUG == 1 )
            if (!eq2taut && pINChI && !( ( Stereo = pINChI->StereoIsotopic ) &&
                Eql_INChI_Stereo( Stereo, EQL_SP3_INV, NULL, EQL_EXISTS, 0 ) ))
            {
                /* component has no stereo; check whether it has stereo in the preceding layers */
                if (pINChI_Taut && ( Stereo_Taut = pINChI_Taut->Stereo ) && /* F is not empty */
                    Eql_INChI_Stereo( Stereo_Taut, EQL_SP3_INV, NULL, EQL_EXISTS, 0 ) ||
                    !( pINChI_Taut && ( Stereo_Taut = pINChI_Taut->Stereo ) &&  /* M is empty and ... */
                        Eql_INChI_Stereo( Stereo_Taut, EQL_SP3_INV, NULL, EQL_EXISTS, 0 ) ) &&
                        ( pINChI_Taut && ( Stereo_Taut = pINChI_Taut->StereoIsotopic ) &&  /* ... MI is not empty */
                            Eql_INChI_Stereo( Stereo_Taut, EQL_SP3_INV, NULL, EQL_EXISTS, 0 ) ))
                {

                    eq2taut = iiEmpty; /* the component has stereo in the preceding layer  */
                }
            }
#endif
        }
        else
        {
            /*========= if not bSecondNonTautPass then compare inv taut stereo to various stereo ========*/
            if (!bSecondNonTautPass && bOmitRepetitions && pINChI &&
                ( pINChI->nNumberOfIsotopicAtoms > 0 ||
                  pINChI->nNumberOfIsotopicTGroups > 0 ||
                  (pINChI->nPossibleLocationsOfIsotopicH && pINChI->nPossibleLocationsOfIsotopicH[0] > 1) )) /* djb-rwth: addressing LLVM warning */
            {
                /* compare tautomeric isotopic stereo-inverted to:
                *    a) tautomeric stereo-inverted
                *    b) Inverted(tautomeric stereo)
                *    c) Inverted(tautomeric isotopic stereo)
                */
                /* a) compare tautomeric isotopic stereo-inverted to tautomeric stereo-inverted */
                if (!eq2taut)
                {
                    eq2taut = pINChI &&
                        ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Taut = pINChI->Stereo ) &&
                        Eql_INChI_Stereo( Stereo, EQL_SP3_INV, Stereo_Taut, EQL_SP3_INV, 0 );
                    /* stereo-inv  isotopic taut =  taut stereo-inv */
                    eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO ) : 0;
                }
                /* b) compare tautomeric isotopic stereo-inverted to Inverted(tautomeric stereo) */
                if (!eq2taut)
                {
                    eq2taut = pINChI &&
                        ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Taut = pINChI->Stereo ) &&
                        Eql_INChI_Stereo( Stereo, EQL_SP3_INV, Stereo_Taut, EQL_SP3, 0 );
                    /* stereo-inv   isotopic taut =  Inv(taut stereo) */
                    eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iiEq2INV ) : 0;
                }
                /* c) compare tautomeric isotopic stereo-inverted to Inverted(tautomeric isotopic stereo) */
                if (!eq2taut)
                {
                    eq2taut = pINChI &&
                        ( Stereo = pINChI->StereoIsotopic ) &&
                        Eql_INChI_Stereo( Stereo, EQL_SP3_INV, Stereo, EQL_SP3, 0 );
                    /* stereo-inv   isotopic taut =  Inv(taut iso stereo) */
                    eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iiEq2INV | iiEq2ISO ) : 0;
                }
#if ( FIX_EMPTY_LAYER_BUG == 1 )
                if (!eq2taut && pINChI && !( ( Stereo = pINChI->StereoIsotopic ) &&
                                             Eql_INChI_Stereo( Stereo, EQL_SP3_INV, NULL, EQL_EXISTS, 0 ) ))
                {
                    /* component has no MI stereo; check whether it has stereo in the preceding layer M */
                    if (( Stereo_Taut = pINChI->Stereo ) &&
                        Eql_INChI_Stereo( Stereo_Taut, EQL_SP3_INV, NULL, EQL_EXISTS, 0 ))
                    {
                        eq2taut = iiEmpty; /* the component has stereo in the preceding layer  */
                    }
                }
#endif
            }
        }
        if (eq2taut)
        {
            /* we may be here only in case of the current layer found equal in another layer the same component */
            if (pINChI_Prev && pINChI_Prev->nNumberOfAtoms)
            {
                /* previous component exists; output it before output the current component */
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                if (( Stereo_Prev = pINChI_Prev->StereoIsotopic ) && Stereo_Prev->nNumberOfStereoCenters > 0)
                {
                    MakeMult( mult + 1, "*", strbuf, 0, bOverflow );

                    MakeStereoString( Stereo_Prev->nNumber, NULL, Stereo_Prev->t_parityInv,
                        0, Stereo_Prev->nNumberOfStereoCenters,
                        strbuf, TAUT_MODE, bOverflow );
                }
            }
            else
            {
                if (pINChI_Taut_Prev && pINChI_Taut_Prev->nNumberOfAtoms)
                {
                    /* previous non-taut component exists only in taut list */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    /* do not output stereo of non-tautomeric in non-taut layer: it has been output in the main layer */
                }
            }
            /* we have found another (previously printed) layer of the current component equal to this layer */
            /* output this (current) equivalence mark = EquString(eq2taut) */
            pCurrEquStr = EquString( eq2taut );
            if (multPrevEquStr && pPrevEquStr)
            {
                if (pCurrEquStr && !strcmp( pCurrEquStr, pPrevEquStr ))
                {
                    multPrevEquStr++;
                }
                else
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = pCurrEquStr;
                    multPrevEquStr = 1;
                }
            }
            else
            {
                pPrevEquStr = pCurrEquStr;
                multPrevEquStr = 1;
            }
            pINChI_Prev = NULL; /* pINChI_Prev sp2 does not exist since */
            pINChI_Taut_Prev = NULL; /* pINChI has just been printed */
            mult = 0;
            eq2tautPrev = 1;     /* pINChI_Prev and pINChI_Taut_Prev have already been output */
        }
        else
        {
            if (eq2tautPrev)
            {
                /* at this point pINChI_Prev does not exist; however, pINChI */
                /*might have been discovered and it is different from pINChI_Taut */
                if (multPrevEquStr && pPrevEquStr)
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = NULL;
                    multPrevEquStr = 0;
                }
                eq2tautPrev = 0;
                pINChI_Prev = pINChI;
                pINChI_Taut_Prev = pINChI_Taut;
                mult = 0;
            }
            else
            {
                /* current layer is different from previously printed layers of the current component */
                /* compare the current layer to this layer of the previous component: */
                /* check whether pINChI and pINChI_Prev have non-zero identical stereo sp2 */
                /*================ compare iso sp3 to previous =====================*/
                eq2prev = bUseMulipliers &&
                    pINChI && pINChI->nNumberOfIsotopicAtoms + pINChI->nNumberOfIsotopicTGroups > 0 &&
                    pINChI_Prev && pINChI_Prev->nNumberOfIsotopicAtoms + pINChI_Prev->nNumberOfIsotopicTGroups > 0 &&
                    /* do both have stereo? */
                    ( Stereo = pINChI->StereoIsotopic ) && ( Stereo_Prev = pINChI_Prev->StereoIsotopic ) &&
                    /* is their inverted stereo same? */
                    Eql_INChI_Stereo( Stereo, EQL_SP3_INV, Stereo_Prev, EQL_SP3_INV, 0 );
                if (eq2prev)
                {
                    mult++; /* mult = (number of non-empty equal items)-1 */
                    continue;
                }
                else
                {
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    if (pINChI_Prev && pINChI_Prev->nNumberOfAtoms && pINChI_Prev->nNumberOfIsotopicAtoms + pINChI_Prev->nNumberOfIsotopicTGroups > 0)
                    {
                        if (( Stereo_Prev = pINChI_Prev->StereoIsotopic ) &&
                            Stereo_Prev->nNumberOfStereoCenters > 0 && Stereo_Prev->nCompInv2Abs)
                        {
                            MakeMult( mult + 1, "*", strbuf, 0, bOverflow );

                            MakeStereoString( Stereo_Prev->nNumberInv, NULL, Stereo_Prev->t_parityInv,
                                0, Stereo_Prev->nNumberOfStereoCenters,
                                strbuf, TAUT_MODE, bOverflow );
                        }
                        /* else sp3 info is not present in pINChI_Prev */
                    }
                    else
                    {
                        /* do not print pINChI_Prev because it either do not exist of have already been printed */
                        if (bSecondNonTautPass && pINChI_Taut_Prev && pINChI_Taut_Prev->nNumberOfAtoms)
                        {
                            if (( Stereo_Taut_Prev = pINChI_Taut_Prev->StereoIsotopic ) &&
                                Stereo_Taut_Prev->nNumberOfStereoCenters > 0 && Stereo_Taut_Prev->nCompInv2Abs)
                            {
                                /* since pINChI_Prev does not exist, pINChI_Taut_Prev is non-tautomeric */
                                /* and it has non-trivial inv sp3 info. It has already been printed in the main section */
                                /*
                                tot_len += MakeDelim( sIdenticalValues, strbuf, bOverflow);
                                */
                                ;/* pINChI_Taut_Prev sp3 info was output in the main stereo section */
                            }
                            else
                            {
                                ; /* pINChI_Taut_Prev exists and has not sp3 info */
                            }
                        }
#if ( bRELEASE_VERSION != 1 && defined(_DEBUG) )
                        else
                        {
                            int stop = 1;   /* <BRKPT> */
                        }
#endif
                    }
                }
                pINChI_Prev = pINChI;
                mult = 0; /* we do not know whether the item is empty */
            }
        }
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce isotopic tetr stereo inversion numbering substring of AuxInfo
  /iN: in Isotopic and/or FixedH-Iso parts,
  in both normal and in reconnected layers
****************************************************************************/
int str_AuxInvIsoSp3Numb( CANON_GLOBALS    *pCG,
                          INCHI_SORT       *pINChISort,
                          INCHI_SORT       *pINChISort2,
                          INCHI_IOS_STRING *strbuf,
                          int              *bOverflow,
                          int              bOutType,
                          int              TAUT_MODE,
                          int              num_components,
                          int              bSecondNonTautPass,
                          int              bOmitRepetitions )
{
    int          i, ii, ii2, nUsedLength0;
    INCHI_SORT   *is, *is0 /*, *is2*/;
    INChI        *pINChI, *pINChI_Taut;
    INChI_Aux    *pINChI_Aux, *pINChI_Aux_Taut; /* djb-rwth: removing redundant variables */
    INChI_Stereo *Stereo, *Stereo_Taut;
    int          eq2taut, bNext;
    const char  *pPrevEquStr, *pCurrEquStr;
    int         multPrevEquStr;
    /**************************************************
    * specificity of numbering: there is no previous *
    * component because no repetition is possible    *
    **************************************************/
    pINChI = NULL;
    pINChI_Taut = NULL;
    pINChI_Aux = NULL;
    pINChI_Aux_Taut = NULL;
    /* djb-rwth: removing redundant code */
    bNext = 0;
    is = NULL;
    /* is2         = NULL;*/
    is0 = pINChISort;
    /* is20        = bSecondNonTautPass? pINChISort2 : NULL;*/
    /* djb-rwth: removing redundant code */
    pPrevEquStr = NULL; /*, *pCurrEquStr;*/
    multPrevEquStr = 0;
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i = 0; i < num_components; i++)
    {

        /* 1st (taut) pass: bOutType=OUT_TN  ; 2nd (non-taut pass) bOutType=OUT_NT */
        is = is0 + i;
        pINChI = ( 0 <= ( ii = GET_II( bOutType, is ) ) ) ? is->pINChI[ii] : NULL;
        pINChI_Aux = pINChI ? is->pINChI_Aux[ii] : NULL;
        /*================ to compare to previously printed =====================*/
        if (bSecondNonTautPass)
        {
            /* component that was printed on the 1st pass */
            pINChI_Taut = ( 0 <= ( ii2 = GET_II( OUT_T1, is ) ) ) ? is->pINChI[ii2] : NULL;
            pINChI_Aux_Taut = pINChI_Taut ? is->pINChI_Aux[ii2] : NULL;
        }
        eq2taut = 0;
        /*========= if bSecondNonTautPass then compare iso non-taut stereo to other stereo ========*/
        if (bSecondNonTautPass && bOmitRepetitions && pINChI && pINChI_Aux && pINChI_Aux->bIsIsotopic &&
            ( Stereo = pINChI->StereoIsotopic ) && Stereo->nCompInv2Abs &&
            pINChI_Aux->nNumberOfAtoms > 0 && pINChI_Aux->nIsotopicOrigAtNosInCanonOrdInv)
        {
            /* compare isotopic non-tautomeric inverted stereo numbering to:
            *   a) tautomeric numbering
            *   b) non-tautomeric numbering
            *   c) *tautomeric isotopic numbering
            *   d) *non-tautomeric isotopic numbering
            *   e) tautomeric inverted stereo numbering
            *   f) *non-tautomeric inverted stereo numbering
            *   g) tautomeric isotopic inverted stereo numbering
            */
            /* a) compare isotopic non-tautomeric inverted stereo numbering to tautomeric numbering */
            if (!eq2taut)
            {
                eq2taut = pINChI_Taut &&
                    Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_INV | EQL_NUM_ISO, pINChI_Aux_Taut, EQL_NUM );
                /* stereo-inv   isotopic numbering  non-taut =  taut numbering */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iiNUMB | iitNONTAUT ) : 0;
            }
            /* b) compare isotopic non-tautomeric inverted stereo numbering to non-tautomeric numbering */
            if (!eq2taut)
            {
                eq2taut =
                    Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_INV | EQL_NUM_ISO, pINChI_Aux, EQL_NUM );
                /* stereo-inv    isotopic   numb.    non-taut =  non-taut numbering */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iiNUMB | iitNONTAUT | iiEq2NONTAUT ) : 0;
            }
            /* c) compare isotopic non-tautomeric inverted stereo numbering to tautomeric isotopic numbering */
            if (!eq2taut)
            {
                eq2taut = pINChI_Taut &&
                    Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_INV | EQL_NUM_ISO, pINChI_Aux_Taut, EQL_NUM_ISO );
                /* stereo-inv   isotopic   numb.     non-taut =  taut iso numbering */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iiNUMB | iitNONTAUT | iiEq2ISO ) : 0;
            }
            /* d) compare isotopic non-tautomeric inverted stereo numbering to non-tautomeric isotopic numbering */
            if (!eq2taut)
            {
                eq2taut = Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_INV | EQL_NUM_ISO, pINChI_Aux, EQL_NUM_ISO );
                /* stereo-inv   isotopic   numb.     non-taut =  non-taut isotopic numbering */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iiNUMB | iitNONTAUT | iiEq2NONTAUT | iiEq2ISO ) : 0;
            }
            /* e) compare isotopic non-tautomeric inverted stereo numbering to tautomeric inverted stereo numbering */
            if (!eq2taut)
            {
                eq2taut = pINChI_Taut && pINChI_Aux_Taut &&
                    ( Stereo_Taut = pINChI_Taut->Stereo ) && Stereo_Taut->nCompInv2Abs &&
                    Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_INV | EQL_NUM_ISO, pINChI_Aux_Taut, EQL_NUM_INV );
                /* stereo-inv   isotopic numbering  non-taut =  stereo-inv taut numbering */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iiNUMB | iitNONTAUT | iiEq2INV ) : 0;
            }
            /* f) compare isotopic non-tautomeric inverted stereo numbering to non-tautomeric inverted stereo numbering */
            if (!eq2taut)
            {
                eq2taut =
                    ( Stereo_Taut = pINChI->StereoIsotopic ) && Stereo_Taut->nCompInv2Abs &&
                    Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_INV | EQL_NUM_ISO, pINChI_Aux, EQL_NUM_INV );
                /* stereo-inv   isotopic numbering  non-taut =  stereo-inv non-taut numbering */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iiNUMB | iitNONTAUT | iiEq2INV | iiEq2NONTAUT ) : 0;
            }

            /* g) compare isotopic non-tautomeric inverted stereo numbering to tautomeric isotopic inverted stereo numbering */
            if (!eq2taut)
            {
                eq2taut = pINChI_Taut &&
                    ( Stereo_Taut = pINChI_Taut->StereoIsotopic ) && Stereo_Taut->nCompInv2Abs &&
                    Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_INV | EQL_NUM_ISO, pINChI_Aux_Taut, EQL_NUM_INV | EQL_NUM_ISO );
                /* stereo-inv   isotopic numbering  non-taut =  stereo-inv iso taut numbering */
                eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iiNUMB | iitNONTAUT | iiEq2INV | iiEq2ISO ) : 0;
            }
        }
        else
        {
            /*========= if not bSecondNonTautPass then compare inv taut stereo numb to taut numb ========*/
            if (!bSecondNonTautPass && bOmitRepetitions && pINChI && pINChI_Aux && pINChI_Aux->bIsIsotopic &&
                ( Stereo = pINChI->StereoIsotopic ) && Stereo->nCompInv2Abs &&
                pINChI_Aux->nNumberOfAtoms > 0 && pINChI_Aux->nIsotopicOrigAtNosInCanonOrdInv)
            {
                /* compare isotopic tautomeric inverted stereo numbering to:
                *   a) tautomeric numbering
                *   b) tautomeric isotopic numbering
                *   c) tautomeric inverted stereo numbering
                */
                /* a) compare isotopic tautomeric inverted stereo numbering to tautomeric numbering */
                if (!eq2taut)
                {
                    eq2taut = Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_INV | EQL_NUM_ISO, pINChI_Aux, EQL_NUM );
                    /* stereo-inv   isotopic numbering  (taut) =  taut numbering */
                    eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iiNUMB ) : 0;
                }
                /* b) compare isotopic tautomeric inverted stereo numbering to tautomeric isotopic numbering */
                if (!eq2taut)
                {
                    eq2taut = Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_INV | EQL_NUM_ISO, pINChI_Aux, EQL_NUM_ISO );
                    /* stereo-inv   isotopic numbering(taut) =  isotopic taut numbering */
                    eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iiNUMB | iiEq2ISO ) : 0;
                }
                /* b) compare isotopic tautomeric inverted stereo numbering to tautomeric inverted stereo numbering */
                if (!eq2taut)
                {
                    eq2taut = pINChI->Stereo && Stereo->nCompInv2Abs &&
                        Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM_INV | EQL_NUM_ISO, pINChI_Aux, EQL_NUM_INV ); /* djb-rwth: removing redundant code */
                    /* stereo-inv   isotopic numbering  (taut) =  taut stereo-inv numbering */
                    eq2taut = eq2taut ? ( iiSTEREO_INV | iitISO | iiNUMB | iiEq2INV ) : 0;
                }
            }
        }
        if (eq2taut)
        {
            /* we have found another (previously printed) layer of the current component equal to this layer */
            /* output this (current) equivalence mark = EquString(eq2taut) */
            pCurrEquStr = EquString( eq2taut );
            if (multPrevEquStr && pPrevEquStr)
            {
                if (pCurrEquStr && !strcmp( pCurrEquStr, pPrevEquStr ))
                {
                    multPrevEquStr++;
                }
                else
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = pCurrEquStr;
                    multPrevEquStr = 1;
                }
            }
            else
            {
                pPrevEquStr = pCurrEquStr;
                multPrevEquStr = 1;
            }
        }
        else
        {
            /* current layer is different from previously printed layers of the current component */
            if (multPrevEquStr && pPrevEquStr)
            {
                /* new EqStr is different; output it */
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                pPrevEquStr = NULL;
                multPrevEquStr = 0;
            }
            if (bNext++)
            {
                MakeDelim( sCompDelim, strbuf, bOverflow );
            }
            if (pINChI && pINChI_Aux && pINChI_Aux->bIsIsotopic && pINChI_Aux->nNumberOfAtoms &&
                ( Stereo = pINChI->StereoIsotopic ) && Stereo->nNumberOfStereoCenters &&
                Stereo->nCompInv2Abs && pINChI_Aux->nIsotopicOrigAtNosInCanonOrdInv)
            {
                MakeCtString( pCG, pINChI_Aux->nIsotopicOrigAtNosInCanonOrdInv,
                    pINChI_Aux->nNumberOfAtoms, 0, NULL, 0,
                    strbuf, TAUT_MODE, bOverflow );
            }
            /* else isotopic inv stereo info is not present in pINChI */
        }
    }
    if (multPrevEquStr && pPrevEquStr)
    {
        /* the new EqStr of the last item has not been printed; output it now */
        if (bNext++)
        {
            MakeDelim( sCompDelim, strbuf, bOverflow );
        }
        MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
        pPrevEquStr = NULL;
        /* djb-rwth: removing redundant code */
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce numbering substring of AuxInfo
  /N: in Main and/or /F: in FixedH part,
  in both normal and in reconnected layers
****************************************************************************/
int str_AuxNumb( CANON_GLOBALS    *pCG,
                 INCHI_SORT       *pINChISort,
                 INCHI_SORT       *pINChISort2,
                 INCHI_IOS_STRING *strbuf,
                 int              *bOverflow,
                 int              bOutType,
                 int              TAUT_MODE,
                 int              num_components,
                 int              bSecondNonTautPass,
                 int              bOmitRepetitions )
{
    int          i, ii, ii2, nUsedLength0;
    INCHI_SORT   *is, *is0 /*, *is2*/;
    INChI        *pINChI, *pINChI_Taut = NULL;
    INChI_Aux    *pINChI_Aux, *pINChI_Aux_Taut = NULL;
    int          eq2taut, bNext;
    const char  *pPrevEquStr, *pCurrEquStr;
    int         multPrevEquStr;
    bNext = 0;
    /*is2         = bSecondNonTautPass? pINChISort2 : NULL;*/
    /* djb-rwth: removing redundant code */
    pPrevEquStr = NULL; /*, *pCurrEquStr;*/
    multPrevEquStr = 0;
    is = NULL;
    nUsedLength0 = strbuf->nUsedLength;

    if (!( is0 = pINChISort ))
    {
        return nUsedLength0;
    }

    /* For each connected component...    */
    for (i = 0; i < num_components; i++)
    {
        /* 1st (taut) pass: bOutType=OUT_TN  ; 2nd (non-taut pass) bOutType=OUT_NT */
        is = is0 + i;
        pINChI = ( 0 <= ( ii = GET_II( bOutType, is ) ) ) ? is->pINChI[ii] : NULL;
        pINChI_Aux = pINChI ? is->pINChI_Aux[ii] : NULL;
        /*================ to compare to previously printed =====================*/
        if (bSecondNonTautPass)
        {
            /* component that was printed on the 1st pass */
            pINChI_Taut = ( 0 <= ( ii2 = GET_II( OUT_T1, is ) ) ) ? is->pINChI[ii2] : NULL;
            pINChI_Aux_Taut = pINChI_Taut ? is->pINChI_Aux[ii2] : NULL;
        }
        eq2taut = 0;
        /*========= if bSecondNonTautPass then compare iso non-taut stereo to other stereo ========*/
        if (bSecondNonTautPass && bOmitRepetitions && pINChI && pINChI_Aux && pINChI_Aux->nNumberOfAtoms > 0)
        {
            /* compare non-tautomeric numbering to:
            *   a) tautomeric numbering
            */
            /* a) compare non-tautomeric numbering to tautomeric numbering */
            if (!eq2taut)
            {
                eq2taut = pINChI_Taut && !pINChI_Taut->bDeleted &&
                    Eql_INChI_Aux_Num( pINChI_Aux, EQL_NUM, pINChI_Aux_Taut, EQL_NUM );
                /* numbering  non-taut =  taut numbering */
                eq2taut = eq2taut ? ( iiNUMB | iitNONTAUT ) : 0;
            }
        }
        if (eq2taut)
        {
            /* we have found another (previously printed) layer of the current component equal to this layer */
            /* output this (current) equivalence mark = EquString(eq2taut) */
            pCurrEquStr = EquString( eq2taut );
            if (multPrevEquStr && pPrevEquStr)
            {
                if (pCurrEquStr && !strcmp( pCurrEquStr, pPrevEquStr ))
                {
                    multPrevEquStr++;
                }
                else
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = pCurrEquStr;
                    multPrevEquStr = 1;
                }
            }
            else
            {
                pPrevEquStr = pCurrEquStr;
                multPrevEquStr = 1;
            }
        }
        else
        {
            /* current layer is different from previously printed layers of the current component */
            if (multPrevEquStr && pPrevEquStr)
            {
                /* new EqStr is different; output it */
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                pPrevEquStr = NULL;
                multPrevEquStr = 0;
            }
            if (bNext++)
            {
                MakeDelim( sCompDelim, strbuf, bOverflow );
            }
            if (pINChI && pINChI_Aux && pINChI_Aux->nNumberOfAtoms)
            {
                MakeCtString( pCG, pINChI_Aux->nOrigAtNosInCanonOrd,
                    pINChI_Aux->nNumberOfAtoms, 0, NULL, 0,
                    strbuf, TAUT_MODE, bOverflow );
            }
        }
    }
    if (multPrevEquStr && pPrevEquStr)
    {
        /* the new EqStr of the last item has not been printed; output it now */
        if (bNext++)
        {
            MakeDelim( sCompDelim, strbuf, bOverflow );
        }
        MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
        pPrevEquStr = NULL;
        /* djb-rwth: removing redundant code */
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce TGroup equivalence substring of AuxInfo
****************************************************************************/
int str_AuxTgroupEqu( INCHI_SORT       *pINChISort,
                      INCHI_IOS_STRING *strbuf,
                      int              *bOverflow,
                      int              bOutType,
                      int              TAUT_MODE,
                      int              num_components,
                      int              bUseMulipliers )
{
    int          i, ii, nUsedLength0;
    INCHI_SORT   *is, *is0;
    INChI_Aux    *pINChI_Aux, *pINChI_Aux_Prev;
    int          mult, eq2prev, bNext;

    nUsedLength0 = strbuf->nUsedLength;

    is0 = pINChISort;
    is = NULL;
    i = 0;
    pINChI_Aux_Prev = ( 0 <= ( ii = GET_II( bOutType, is0 ) ) ) ? is0->pINChI_Aux[ii] : NULL;
    mult = 0;
    bNext = 0;

    /* For each connected component...    */
    for (i++; i <= num_components; i++)
    {
        pINChI_Aux = ( i < num_components && ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) ) ? is->pINChI_Aux[ii] : NULL;
        eq2prev = bUseMulipliers &&
            Eql_INChI_Aux_Equ( pINChI_Aux, EQL_EQU_TG, pINChI_Aux_Prev, EQL_EQU_TG );
        if (eq2prev)
        {
            mult++; /* mult = (number of non-empty equal items)-1 */
            continue;
        }
        else
        {
            if (bNext++)
            {
                MakeDelim( sCompDelim, strbuf, bOverflow );
            }
            if (pINChI_Aux_Prev && pINChI_Aux_Prev->nNumberOfTGroups &&
                bHasEquString( pINChI_Aux_Prev->nConstitEquTGroupNumbers, pINChI_Aux_Prev->nNumberOfTGroups ))
            {
                MakeMult( mult + 1, "*", strbuf, 0, bOverflow );
                MakeEquString( pINChI_Aux_Prev->nConstitEquTGroupNumbers,
                    pINChI_Aux_Prev->nNumberOfTGroups,
                    0, strbuf,
                    TAUT_MODE, bOverflow );
            }
        }
        pINChI_Aux_Prev = pINChI_Aux;
        mult = 0; /* we do not know whether the item is empty */
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Produce charge-radical-valence substring of AuxInfo
****************************************************************************/
int str_AuxChargeRadVal( INCHI_SORT       *pINChISort,
    INCHI_IOS_STRING *strbuf,
    int               *bOverflow,
    int               bOutType,
    int               TAUT_MODE,
    int               num_components,
    int               bUseMulipliers )
{
    int          i, ii, nUsedLength0;
    INCHI_SORT   *is, *is0;
    INChI_Aux    *pINChI_Aux, *pINChI_Aux_Prev;
    int          mult, eq2prev, bNext;

    pINChI_Aux_Prev = NULL;
    mult = 0;
    bNext = 0;
    is = NULL;
    is0 = pINChISort;
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i = 0; i <= num_components; i++)
    {

        /* 1st (taut) pass: bOutType=OUT_TN  ; 2nd (non-taut pass) bOutType=OUT_NT */
        pINChI_Aux = ( i < num_components && ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) ) ? is->pINChI_Aux[ii] : NULL;
        /* check whether pINChI_Aux and pINChI_Aux_Prev have identical info */
        eq2prev = bUseMulipliers &&
            EqlOrigInfo( pINChI_Aux, pINChI_Aux_Prev );
        if (eq2prev)
        {
            /* eq. info is same and non-trivial */
            mult++; /* mult = (number of non-empty equal items)-1 */
            continue;
        }
        else
        {
            if (i)
            {
                /* pINChI_Aux info is either different or trivial. Output pINChI_Aux_Prev anyway */
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                if (pINChI_Aux_Prev && pINChI_Aux_Prev->nNumberOfAtoms)
                {
                    if (bHasOrigInfo( pINChI_Aux_Prev->OrigInfo, pINChI_Aux_Prev->nNumberOfAtoms ))
                    {
                        /* pINChI_Aux_Prev exists and has orig. info info */
                        MakeMult( mult + 1, "*", strbuf, 0, bOverflow );
                        MakeCRVString( pINChI_Aux_Prev->OrigInfo,
                            pINChI_Aux_Prev->nNumberOfAtoms,
                            0, strbuf, TAUT_MODE, bOverflow );
                    }
                    else
                    {
                        ; /* pINChI_Aux_Prev exists and has only trivial info */
                    }
                }
#if ( bRELEASE_VERSION != 1 && defined(_DEBUG) )
                else
                {
                    int stop = 1;   /* <BRKPT> */
                }
#endif
            }
        }
        pINChI_Aux_Prev = pINChI_Aux;
        mult = 0; /* we do not know whether the item is empty */
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Prepare tautomeric transposition substring of AuxInfo
****************************************************************************/
int bin_AuxTautTrans( INCHI_SORT *pINChISort,
    INCHI_SORT *pINChISort2,
    AT_NUMB    **pTrans_n,
    AT_NUMB    **pTrans_s,
    int        bOutType,
    int        num_components )
{
    int          i, ii, ii2, ret;
    INCHI_SORT   *is, *is2, *is0, *is20;
    INChI        *pINChI, *pINChI_Taut;
    AT_NUMB     *nTrans_n = NULL;
    AT_NUMB     *nTrans_s = NULL;

    /* djb-rwth: removing redundant code */
    is0 = pINChISort;
    is20 = pINChISort2;

    /* djb-rwth: rewritten to avoid memory leaks */

    /* Pass 1: save new non-taut numbering */
    /* For each connected component...    */
    for (i = 0; i < num_components; i++)
    {
        is = is0 + i;
        is2 = is20 + i;
        pINChI = (0 <= (ii = GET_II(bOutType, is))) ? is->pINChI[ii] : NULL;
        pINChI_Taut = (0 <= (ii2 = GET_II(OUT_T1, is2))) ? is2->pINChI[ii2] : NULL;
        if (pINChI && pINChI->nNumberOfAtoms > 0 &&
            pINChI_Taut && pINChI_Taut->nNumberOfAtoms > 0 &&
            /* different components save equal new ord. numbers: */
            is->ord_number != is2->ord_number)
        {
            if (!nTrans_n || !nTrans_s)
            {
                nTrans_n = (AT_NUMB*)inchi_calloc(num_components + 1, sizeof(nTrans_n[0]));
                nTrans_s = (AT_NUMB*)inchi_calloc(num_components + 1, sizeof(nTrans_s[0]));
            }
            if (nTrans_n && nTrans_s)
            {
                /* new ordering number for original non-tautomeric component number is->ord_number */
                nTrans_n[is->ord_number] = i + 1; /*nTrans_t[is2->ord_number] =*/ 
            }
        }
    }
    if (nTrans_n && nTrans_s)
    {
        /* Pass 2: get new taut numbering, retrieve new non-taut and save the transposition */
        for (i = 0; i < num_components; i++)
        {
            is = is0 + i;
            is2 = is20 + i;
            pINChI = (0 <= (ii = GET_II(bOutType, is))) ? is->pINChI[ii] : NULL;
            pINChI_Taut = (0 <= (ii2 = GET_II(OUT_T1, is2))) ? is2->pINChI[ii2] : NULL;
            if (pINChI && pINChI->nNumberOfAtoms > 0 &&
                pINChI_Taut && pINChI_Taut->nNumberOfAtoms > 0 &&
                is->ord_number != is2->ord_number &&
                nTrans_n[is2->ord_number])
            {
                /* nTrans_n[is2->ord_number] is new ordering number of
                the non-taut representation of the tautomeric component
                that has new ord number i+1 and orig ordering number is2->ord_number.
                Old numbers start from 0, new start from 1
                */

                /* n = nTrans_s[t]: taut component #t is in position #n of the non-taut representation */
                nTrans_s[i + 1] = nTrans_n[is2->ord_number];
            }
        }
        *pTrans_n = nTrans_n;
        *pTrans_s = nTrans_s;
        ret = 1;
    }
    else
    {
        if (nTrans_n)
        {
            inchi_free(nTrans_n);
            ret = -1;
        }
        if (nTrans_s)
        {
            inchi_free(nTrans_s);
            ret = -1;
        }
    }

    return ret;
}


/****************************************************************************
  Output tautomeric transposition substring of AuxInfo
****************************************************************************/
int str_AuxTautTrans( CANON_GLOBALS     *pCG,
    AT_NUMB           *nTrans_n,
    AT_NUMB           *nTrans_s,
    INCHI_IOS_STRING  *strbuf,
    int               *bOverflow,
    int               TAUT_MODE,
    int               num_components )
{
    int i, k, len, j, nUsedLength0;

    nUsedLength0 = strbuf->nUsedLength;

    if (nTrans_n && nTrans_s)
    {
        /* print the transposition, cycle after cycle */
        for (i = 1; i <= num_components; i++)
        {
            if (nTrans_s[i])
            {
                /* get one cycle of the transposition */
                for (j = i, len = 0; ( k = nTrans_s[j] ); j = k, len++)
                {
                    nTrans_n[len] = j; /* save the transposition */
                    nTrans_s[j] = 0; /* clear used element to avoid repetitions */
                }
                /* print one cycle of the transposition */
                MakeDelim( "(", strbuf, bOverflow );
                MakeCtString( pCG, nTrans_n, len, 0, NULL, 0,
                    strbuf, TAUT_MODE, bOverflow );
                MakeDelim( ")", strbuf, bOverflow );
            }
        }
    }
    if (nTrans_n)
    {
        inchi_free( nTrans_n );
    }
    if (nTrans_s)
    {
        inchi_free( nTrans_s );
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}


/****************************************************************************
  Output isotopic TGroup equivalence substring of AuxInfo
****************************************************************************/
int str_AuxIsoTgroupEqu( INCHI_SORT       *pINChISort,
    INCHI_IOS_STRING *strbuf,
    int              *bOverflow,
    int              bOutType,
    int              TAUT_MODE,
    int              num_components,
    int              bOmitRepetitions,
    int              bUseMulipliers )
{
    int          i, ii, nUsedLength0;
    INCHI_SORT   *is, *is0;
    INChI_Aux    *pINChI_Aux, *pINChI_Aux_Prev;
    int          mult, eq2prev, eq2taut, eq2tautPrev, bNext;
    const char  *pPrevEquStr, *pCurrEquStr;
    int         multPrevEquStr;
    pINChI_Aux = NULL;
    pINChI_Aux_Prev = NULL;
    mult = 0;
    bNext = 0;
    is = NULL;
    is0 = pINChISort;
    /* djb-rwth: removing redundant code */
    eq2tautPrev = 1; /* pINChI_Aux_Prev (previous pINChI_Aux) does not exist */
    pPrevEquStr = NULL; /*, *pCurrEquStr;*/
    multPrevEquStr = 0;
    nUsedLength0 = strbuf->nUsedLength;

    /* For each connected component...    */
    for (i = 0; i <= num_components; i++)
    {
        /* 1st (taut) pass: bOutType=OUT_TN  ; 2nd (non-taut pass) bOutType=OUT_NT */
        pINChI_Aux = ( i < num_components && ( is = is0 + i, 0 <= ( ii = GET_II( bOutType, is ) ) ) ) ? is->pINChI_Aux[ii] : NULL;
        /*================ compare iso non-taut equivalence info to non-iso taut ========*/
        eq2taut = 0;
        if (bOmitRepetitions && pINChI_Aux && pINChI_Aux->bIsIsotopic)
        {
            /**************************************************
            * compare isotopic tautomeric equivalence to:
            *    a) non-isotopic tautomeric
            */
            /* compare isotopic t-group equivalence to non-isotopic */
            eq2taut = Eql_INChI_Aux_Equ( pINChI_Aux, EQL_EQU_TG | EQL_EQU_ISO, pINChI_Aux, EQL_EQU_TG );
            /* equ   taut-isotopic = tautomeric, same as for isotopic atom equivalence info*/
            eq2taut = eq2taut ? ( iiEQU | iitISO ) : 0;
        }
        if (eq2taut)
        {
            /* current isotopic t-group equivalence has been found to be same as non-isotopic */
            if (pINChI_Aux_Prev && pINChI_Aux_Prev->nNumberOfAtoms)
            {
                /* previous component exists */
                if (bNext++)
                {
                    MakeDelim( sCompDelim, strbuf, bOverflow );
                }
                if (bHasEquString( pINChI_Aux_Prev->nConstitEquIsotopicTGroupNumbers, pINChI_Aux_Prev->nNumberOfTGroups ))
                {
                    /* output previous component(s) equivalence since it was found to be non-trivial */
                    MakeMult( mult + 1, "*", strbuf, 0, bOverflow );
                    MakeEquString( pINChI_Aux_Prev->nConstitEquIsotopicTGroupNumbers, pINChI_Aux_Prev->nNumberOfTGroups, 0,
                        strbuf, TAUT_MODE, bOverflow );
                }
                else
                {
                    ; /* pINChI_Aux_Prev exists and does not have non-trivial t-group equivalence info */
                }
            }
            /* we have found pINChI_Aux->pINChI_Aux->nConstitEquIsotopicTGroupNumbers same as in pINChI_Aux->nConstitEquTGroupNumbers */
            pCurrEquStr = EquString( eq2taut );
            if (multPrevEquStr && pPrevEquStr)
            {
                if (pCurrEquStr && !strcmp( pCurrEquStr, pPrevEquStr ))
                {
                    multPrevEquStr++;
                }
                else
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = pCurrEquStr;
                    multPrevEquStr = 1;
                }
            }
            else
            {
                pPrevEquStr = pCurrEquStr;
                multPrevEquStr = 1;
            }
            pINChI_Aux_Prev = NULL; /* pINChI_Aux_Prev has already been output */
            mult = 0;
            eq2tautPrev = 1;
        }
        else
        {
            if (eq2tautPrev)
            {
                /* at this point pINChI_Aux_Prev does not exist; however, pINChI_Aux */
                /* might have been discovered and it may be different from non-isotopic */
                if (multPrevEquStr && pPrevEquStr)
                {
                    /* new EqStr is different; output it */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    MakeEqStr( pPrevEquStr, multPrevEquStr, strbuf, bOverflow );
                    pPrevEquStr = NULL;
                    multPrevEquStr = 0;
                }
                eq2tautPrev = 0;
                pINChI_Aux_Prev = pINChI_Aux;
                mult = 0;
            }
            else
            {
                /* check whether pINChI_Aux and pINChI_Aux_Prev have identical non-trivial isotopic t-group equivalence info */
                eq2prev = bUseMulipliers && Eql_INChI_Aux_Equ( pINChI_Aux, EQL_EQU_TG | EQL_EQU_ISO, pINChI_Aux_Prev, EQL_EQU_TG | EQL_EQU_ISO );
                if (eq2prev)
                {
                    /* eq. info is same and non-trivial */
                    mult++; /* mult = (number of non-empty equal items)-1 */
                    continue;
                }
                else
                {
                    /* pINChI_Aux eq. info is either different or trivial. Output pINChI_Aux_Prev anyway */
                    if (bNext++)
                    {
                        MakeDelim( sCompDelim, strbuf, bOverflow );
                    }
                    if (pINChI_Aux_Prev && pINChI_Aux_Prev->nNumberOfAtoms)
                    {
                        if (bHasEquString( pINChI_Aux_Prev->nConstitEquIsotopicTGroupNumbers, pINChI_Aux_Prev->nNumberOfTGroups ))
                        {
                            /* pINChI_Aux_Prev exists and has equivalence info */
                            MakeMult( mult + 1, "*", strbuf, 0, bOverflow );
                            MakeEquString( pINChI_Aux_Prev->nConstitEquIsotopicTGroupNumbers, pINChI_Aux_Prev->nNumberOfTGroups, 0,
                                strbuf, TAUT_MODE, bOverflow );
                        }
                        else
                        {
                            ; /* pINChI_Aux_Prev exists and has only trivial equivalence info */
                        }
                    }
#if ( bRELEASE_VERSION != 1 && defined(_DEBUG) )
                    else
                    {
                        int stop = 1;   /* <BRKPT> */
                    }
#endif
                }
                pINChI_Aux_Prev = pINChI_Aux;
                mult = 0; /* we do not know whether the item is empty */
            }
        }
    }

    return ( strbuf->nUsedLength - nUsedLength0 );
}
