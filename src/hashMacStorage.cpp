
#include "globals.h"


#if (WIFICOUNTER)

// 25 Personen anlegen da 25 * 2 Bytes = 50 Bytes Mac PAyload = 51 Bytes 
hashedMacBuffer_t storage [25]; 

//reset sctruct 
void clear_storage(hashedMacBuffer_t storage){
  storage->mac_adr = {};
  printf("\nClear Struct! \n "); 
}

//print actual visitor information 
void visitor_ausgabe(hashedMacBuffer_t storage) {
  printf("\nID MAC %i ", storage->mac_adr); 
}

//add a mac adress to the struct 
void visitor_mac_add(uint16_t hashedmac, int8_t nextPos) {

  printf("\nMAC die reinkommt add %i ",hashedmac); 
  //minus 1 damit index bei 0 anfängt da counter ab 1 zählt 
  int count = nextPos - 1;
  printf("\nstorage count value %i ", count); 

  storage[count]->mac_adr = hashedmac;  
  visitor_ausgabe(storage[count]);

}

//return mac to send data 
uint16_t return_visitor_mac(int pos){

	uint16_t visitor_mac;
	visitor_mac = storage[pos]->mac_adr;
	return visitor_mac;
  
}

#endif
