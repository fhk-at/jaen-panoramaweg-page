/**
 * @license
 *
 * SPDX-FileCopyrightText: Copyright © 2021 snek.at
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import {Box} from '@chakra-ui/react'
import {fields, JaenBlock} from '@snek-at/jaen-pages'

const PartnerCard: JaenBlock = () => {
  return (
    <Box>
      <fields.ImageField
        fieldName="partnerblockimg"
        initValue={{
          src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
          title: 'partner',
          alt: 'partner'
        }}
        width="250px"
        height="200px"
      />
    </Box>
  )
}

PartnerCard.BlockName = 'PartnerCard'
PartnerCard.BlockDisplayName = 'PartnerCard'

export default PartnerCard
