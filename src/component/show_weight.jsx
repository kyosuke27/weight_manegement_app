import { ChakraProvider,Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,Flex,Box} from '@chakra-ui/react'

export const ShowWeight=()=>{
    const calcWeightUpDown=(Yweight,Tweight)=>{
        if(Yweight-Tweight>0){
            return Yweight-Tweight;
        }else{
            return Tweight-Yweight
        }
    }
    return (
        <ChakraProvider>
            <Box p={4} w={600} >
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                    <Th>日付</Th>
                    <Th>体重</Th>
                    <Th isNumeric>昨日からの増減</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                    <Td>体重</Td>
                    </Tr>
                    <Tr>
                    <Td>昨日からの増減</Td>
                    </Tr>
                    <Tr>
                    <Td>yards</Td>
                    </Tr>
                </Tbody>
                </Table>
            </Box>
        </ChakraProvider>
    );
};