import { ChakraProvider,Input,Textarea,Button,Box,Stack,Flex } from '@chakra-ui/react'



export const RegistMenu=()=>{
    return (
        <ChakraProvider>
            <Flex align="center" justify="center" m={0}>
                <Box p={4} w={600} >
                    <form method="post" action="https://urbyn1fcra.execute-api.ap-northeast-1.amazonaws.com/Prod/">
                        <Stack spacing={8}>
                            <Input placeholder='体重入力'  size='md' name="weight"   />
                            <Button colorScheme='blue' type="submit">記録</Button>
                        </Stack>
                    </form>
                </Box>
            </Flex>
        </ChakraProvider>
    );
};