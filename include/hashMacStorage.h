#ifndef _hashMac_H
#define _hashMac_H


// modified for use in the Paxcounter

#include "globals.h"

void visitor_mac_add(uint16_t hashedmac, int8_t nextPos);
void visitor_ausgabe();

void clear_storage(hashedMacBuffer_t storage);

//return fuer senddata 
uint16_t return_visitor_mac(int pos);


#endif
