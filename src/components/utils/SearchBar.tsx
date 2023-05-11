import { InputGroup, Input, InputRightElement, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar: React.FC<{
  search: string;
  setSearch: (str: string) => void;
}> = ({
  search,
  setSearch
}) => {

  return (
    <InputGroup width={['100%', 250]} justifySelf={'start'} fontSize={'xl'}>
      <Input 
        placeholder='Search Minion'
        fontSize={'xl'}
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        borderColor={useColorModeValue('dark.bg', 'dark.border')}
        _focus={{
          borderColor: '#9A825680',
          outline: 'none'
        }}
        _hover={{
          borderColor: useColorModeValue('dark.boxbg', 'light.bg')
        }}
      />
      <InputRightElement children={<AiOutlineSearch />} />
    </InputGroup>
  )
}

export default SearchBar;