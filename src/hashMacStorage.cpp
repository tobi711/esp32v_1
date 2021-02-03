
#include "globals.h"


#if (WIFICOUNTER)

hashedMacBuffer_t storage [20]; 

void clear_storage(hashedMacBuffer_t storage){
  storage->mac_adr = {};
  printf("\nClear Struct !!! \n "); 

}

void visitor_ausgabe(hashedMacBuffer_t storage) {
  
  printf("\nID MAC %i ", storage->mac_adr); 
  
}

void visitor_mac_add(uint16_t hashedmac, int8_t nextPos) {

  printf("\nMAC die reinkommt add %i ",hashedmac); 

  //minus 1 damit index bei 0 anfängt da counter ab 1 zählt 
  int count = nextPos - 1;
  printf("\nstorage count value %i ", count); 

  storage[count]->mac_adr = hashedmac;  

  visitor_ausgabe(storage[count]);

  /* using memcpy to copy string: 
  memcpy ( person.name, myname, strlen(myname)+1 );
  person.age = 46;
  using memcpy to copy structure: 
  memcpy ( &person_copy, &person, sizeof(person) );
  printf ("person_copy: %s, %d \n", person_copy.name, person_copy.age );*/

}

int return_visitor_mac(int pos){


	int visitor_mac;

	visitor_mac = storage[pos]->mac_adr;

	return visitor_mac;
}





#endif
