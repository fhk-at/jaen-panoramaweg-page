/**
 * @license
 *
 * SPDX-FileCopyrightText: Copyright © 2021 snek.at
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import {blocks, fields} from '@snek-at/jaen-pages'

type CardBlockFields = {text1: string; wohnung1: string}

const WohnungCard: blocks.BC<CardBlockFields> = ({
  values,
  streamFieldWidth
}) => {
  return (
    <>
      <div style={{width: streamFieldWidth}}>
        Wohnung1: {values.wohnung1}
        Text1: {values.text1}
      </div>
    </>
  )
}

WohnungCard.BlockType = 'WohnungCard'
WohnungCard.BlockFields = {
  text1: fields.TextField,
  wohnung1: fields.TextField
}

export default WohnungCard
