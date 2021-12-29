import { ChakraProvider,Input,Button,Box,VStack,Flex } from '@chakra-ui/react'



export const RegistMenu=()=>{
    return (
        <ChakraProvider>
            <Flex align="center" justify="center" m={0}>
            <VStack>
                <Box p={4} w={600} >
                        <form method="post" action="https://urbyn1fcra.execute-api.ap-northeast-1.amazonaws.com/Prod/">
                            <Input placeholder='体重入力'  size='md' name="weight"   />
                            <Button colorScheme='blue' type="submit" w="400px" m={5} >記録</Button>
                        </form>
                </Box>
                <Box>
                        <form method="post" action="">
                            <Button colorScheme='red' type="submit" w="400px">一覧画面へ</Button>
                        </form>
                </Box>
                </VStack>
            </Flex>
        </ChakraProvider>
    );
};