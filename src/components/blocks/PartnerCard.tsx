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
import {JaenImage} from '@snek-at/jaen-pages/src/containers/JaenImage'

type CardBlockFields = {img: JaenImage}

const PartnerCard: blocks.BC<CardBlockFields> = (values: any) => {
  return (
    <div className="m-1" style={{width: 250}}>
      {values.img}
    </div>
  )
}

PartnerCard.BlockType = 'CardBlock'
PartnerCard.BlockFields = {
  img: fields.ImageField
}
PartnerCard.defaultValues = {
  img: {src: '', title: 'partner', alt: 'partner'}
}

export default PartnerCard
