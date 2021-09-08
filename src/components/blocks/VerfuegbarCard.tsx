/**
 * @license
 *
 * SPDX-FileCopyrightText: Copyright © 2021 snek.at
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import {fields, blocks} from '@snek-at/jaen-pages'

type CardBlockFields = {
  text1: string
  available1: string
  max1: string
  text2: string
}

const VerfuegbarCard: blocks.BC<CardBlockFields> = ({
  values,
  streamFieldWidth
}) => {
  return (
    <>
      <div style={{width: streamFieldWidth}}>
        Available1: {values.available1}
        Text1: {values.text1}
        Max1: {values.max1}
        Text2: {values.text2}
      </div>
    </>
  )
}

VerfuegbarCard.BlockType = 'VerfuegbarCard'
VerfuegbarCard.BlockFields = {
  text1: fields.TextField,
  text2: fields.TextField,
  available1: fields.TextField,
  max1: fields.TextField
}
VerfuegbarCard.defaultValues = {}

export default VerfuegbarCard
