
#include "globals.h"


#if (WIFICOUNTER)

void clear_storage(hashedMacBuffer_t macs_buff){
  macs_buff->mac_adr = {};
  printf("\nClear Struct !!! \n "); 

}

void visitor_ausgabe(hashedMacBuffer_t storage) {
  
  printf("\nID MAC %i ", storage->mac_adr); 
  
}

void visitor_mac_add(uint16_t hashedmac, int8_t nextPos) {

  printf("\nMAC die reinkommt add %i ",hashedmac); 

  hashedMacBuffer_t storage [20]; 
  
  int8_t count = nextPos;
  printf("\nstorage count value %i ", count); 

  storage[count]->mac_adr = hashedmac;  

  visitor_ausgabe(storage[count]);

  /* using memcpy to copy string: 
  memcpy ( person.name, myname, strlen(myname)+1 );
  person.age = 46;
  /* using memcpy to copy structure: 
  memcpy ( &person_copy, &person, sizeof(person) );
  printf ("person_copy: %s, %d \n", person_copy.name, person_copy.age );*/
}




#endif
