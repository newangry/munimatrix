import { Box, Flex, Select, Text } from "@mantine/core";
import { IconFilter } from "@tabler/icons-react";
import { FC } from "react";

interface Props {

}

const Table: FC<Props> = ({ }) => {
    
    return <Box
        mt={25}
        w={'100%'}
    >
        <Flex
            justify={'space-between'}
            align={'center'}
            gap={10}
        >
            <Flex>
                <IconFilter />
                <Text weight={600}>
                    Filter
                </Text>
            </Flex>
            <Flex
                gap={15}
                align={'center'}
            >
                <Text>
                    1-20 of 245
                </Text>
                <Select
                    data={[
                        { value: '20', label: '20' },
                        { value: '30', label: '30' },
                        { value: '50', label: '40' }
                    ]}
                />
            </Flex>
            
        </Flex>
    </Box>
}

export default Table;