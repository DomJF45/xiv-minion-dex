import { HStack, InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { AiOutlineSearch } from 'react-icons/ai';
import debounce from 'lodash.debounce';
import { useState, useCallback, ChangeEvent } from "react";

interface Props {
  search: any;
  setSearch: any;
  handleSearch: any;
}

const SearchBar = (props: Props) => {

  const { search, setSearch, handleSearch } = props;
  
  return (
    <InputGroup width={['100%', 250]} justifySelf={'start'} fontSize={'xl'}>
      <Input 
        placeholder='Search Minion' 
        fontSize={'xl'} 
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <InputRightElement children={<AiOutlineSearch />} />
    </InputGroup>
  )
}

export default SearchBar;
