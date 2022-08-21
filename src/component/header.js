import React from 'react'
import { Mail, Phone, Facebook,Instagram,Twitter,GitHub } from 'react-feather'

export default function header() {
  return (
    <div class=" bg-[#393939] grid grid-cols-1 items-center h-[46px]">
    <div class="flex justify-between mx-[195px]" >
      <div class="flex gap-x-6">
      <div class="flex gap-x-3">
        <Mail color='#eb870d ' />
        <label class="text-white">info@arkade.in</label>
      </div>
      <div class="flex gap-x-3">
        <Phone color='#eb870d ' />
        <label class="text-white">022 2886 3787</label>
      </div>
      </div>
      <div class="flex gap-x-6">
        <Facebook color='#eb870d ' />
        <Instagram color='#eb870d ' />
        <GitHub color='#eb870d ' />
        <Twitter color='#eb870d ' />
      </div>
    </div>
    </div>
  )
}
