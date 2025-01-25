import { Box, Button, Checkbox, Flex, Grid, Pagination, Popover, ScrollArea, Select, Table, Text } from "@mantine/core";
import { IconFilter } from "@tabler/icons-react";
import { FC } from "react";

interface Props {

}

const MyTable: FC<Props> = ({ }) => {

    return <Box
        mt={25}
        w={'100%'}
        sx={(theme) => ({
            background: theme.colors["bg-colors"][0]
        })}
    >
        <Flex
            justify={'space-between'}
            align={'center'}
            gap={10}
            sx={(theme) => ({
                borderBottom: `1px solid ${theme.colors.border[1]}`
            })}
            p={20}
        >
            <Filter />
            <SelectPageCount />
        </Flex>
        <Table
            sx={(theme) => ({
                borderBottom: `1px solid ${theme.colors.border[1]}`
            })}
        >
            <thead>
                <tr>
                    <th>Date</th>
                    <th>PRIMARY TYPE</th>
                    <th>SUBTYPE</th>
                    <th>EVENT TYPE</th>
                    <th>EVENT SUBTYPE</th>
                    <th>COMPANY</th>
                    <th>AMOUNT</th>
                </tr>
            </thead>
            <tbody>
                <tr key={123}>
                    <td>Oc 23, 2024</td>
                    <td>Legal</td>
                    <td>Court Case Setriee</td>
                    <td>Award to Mnuniciple</td>
                    <td>Sewer</td>
                    <td>
                        <Text
                            sx={(theme) => ({
                                color: theme.colors.link,
                                cursor: 'pointer',
                                textDecoration: 'underline'
                            })}
                        >
                            S.Brothers Inc.
                        </Text>
                    </td>
                    <td>
                        <Text
                            sx={(theme) => ({
                                color: theme.colors["money"][0]
                            })}
                        >
                            $7,414,688.63
                        </Text>
                    </td>
                </tr>
            </tbody>
        </Table>
        <Flex p={20} justify={'flex-end'}>
            <Flex
                gap={50}
            >
                <Pagination total={20} boundaries={1} defaultValue={10} />
                <Flex gap={15}>

                </Flex>
            </Flex>
            <SelectPageCount />
        </Flex>
    </Box>
}

const SelectPageCount = () => {
    return (
        <Flex
            gap={15}
            align={'center'}
        >
            <Text>
                1-20 of 245
            </Text>
            <Select
                w={80}
                value={'20'}
                data={[
                    { value: '20', label: '20' },
                    { value: '30', label: '30' },
                    { value: '50', label: '40' }
                ]}
            />
        </Flex>
    )
}

const Filter = () => {
    return <Popover width={500} trapFocus position="bottom" shadow="md">
        <Popover.Target>
            <Flex
                align={'center'}
                gap={10}
                sx={(theme) => ({
                    cursor: 'pointer'
                })}
            >
                <IconFilter />
                <Text weight={600}>
                    Filter
                </Text>
            </Flex>
        </Popover.Target>
        <Popover.Dropdown>
            <Flex
                sx={(theme) => ({
                    borderBottom: `1px solid ${theme.colors.border[0]}`,
                })}
                p={15}
                justify={'space-between'}
                align={'center'}
            >
                <Text weight={'bold'}>
                    Filter by
                </Text>
                <Text
                    sx={(theme) => ({
                        color: theme.colors.link,
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    })}
                    size={'sm'}
                >
                    Clear all
                </Text>
            </Flex>
            <Grid
                pt={15}
                pb={15}
                sx={(theme) => ({
                    borderBottom: `1px solid ${theme.colors.border[0]}`
                })}
                m={0}
            >
                <Grid.Col span={6}
                    sx={(theme) => ({
                        borderRight: `1px solid ${theme.colors.border[0]}`
                    })}
                    p={0}
                >
                    <Text
                        pl={15}
                        sx={(theme) => ({
                            color: theme.colors.gray[6]
                        })}
                    >
                        Primary Type
                    </Text>
                    <ScrollArea
                        h={300}
                        mt={15}
                        w={"100%"}
                    >
                        <Flex
                            p={10}
                            w={'95%'}
                            sx={(theme) => ({
                                background: theme.colors["bg-colors"][0]
                            })}
                        >
                            <Checkbox
                                label="Contract Award"
                                size={'md'}
                                ml={10}
                            />
                        </Flex>
                    </ScrollArea>
                </Grid.Col>
                <Grid.Col span={6}
                    m={0}
                >
                    <Text
                        pl={15}
                        sx={(theme) => ({
                            color: theme.colors.gray[6]
                        })}
                        weight={600}
                    >
                        Sub Type
                    </Text>
                    <ScrollArea
                        h={300}
                        mt={15}
                        w={"100%"}
                    >
                        <Text
                            weight={600}
                            pl={15}
                        >
                            Contract Award
                        </Text>
                        <Flex
                            pl={15}
                            pr={15}
                            w={'100%'}
                            mt={15}
                        >
                            <Checkbox
                                label="Capital Project"
                                size={'md'}
                            />
                        </Flex>
                    </ScrollArea>
                </Grid.Col>
            </Grid>
            <Flex
                justify={'flex-end'}
                p={15}
            >
                <Button
                    size="md"
                    sx={(theme) => ({
                        background: theme.colors["btn-primary"][1]
                    })}
                    w={100}
                >
                    Apply
                </Button>
            </Flex>
        </Popover.Dropdown>
    </Popover>
}

export default MyTable;