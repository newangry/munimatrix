import { Box, Button, Checkbox, Flex, Grid, Modal, Pagination, Popover, ScrollArea, Select, Table, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconFilter } from "@tabler/icons-react";
import { FC } from "react";

interface Props {

}

const MyTable: FC<Props> = ({ }) => {
    const [opened, { open, close }] = useDisclosure(false);

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
                <tr key={123}
                    onClick={() => {
                        open()
                    }}
                >
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
        <Modal opened={opened} onClose={close} size={'60%'} title={
            <Text
                color="white"
                size={'1.5rem'}
            >
                Additional Event Details
            </Text>
        } centered>
            <ScrollArea>
                <Grid
                    w={'100%'}
                    sx={(theme) => ({
                        borderTop: `1px solid ${theme.colors.border[1]}`
                    })}
                >
                    <Grid.Col span={5} pr={0}>
                        <Flex
                            gap={15}
                            w={'100%'}
                            p={20}
                            pl={30}
                            pr={30}
                            sx={(theme) => ({
                                borderTop: `1px solid ${theme.colors.border[1]}`,
                            })}
                            direction={'column'}
                        >
                            <Grid w={'100%'}>
                                <Grid.Col span={6}>
                                    <Text weight={'bold'} >
                                        Municipality
                                    </Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Text
                                        sx={(theme) => ({
                                            color: theme.colors.gray[5]
                                        })}
                                    >
                                        Ausbury Parik
                                    </Text>
                                </Grid.Col>
                            </Grid>
                            <Grid w={'100%'}>
                                <Grid.Col span={6}>
                                    <Text weight={'bold'} >
                                        Municipal Type
                                    </Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Text
                                        sx={(theme) => ({
                                            color: theme.colors.gray[5]
                                        })}
                                    >
                                        City
                                    </Text>
                                </Grid.Col>
                            </Grid>
                            <Grid w={'100%'}>
                                <Grid.Col span={6}>
                                    <Text weight={'bold'} >
                                        Country
                                    </Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Text
                                        sx={(theme) => ({
                                            color: theme.colors.gray[5]
                                        })}
                                    >
                                        Monmouth
                                    </Text>
                                </Grid.Col>
                            </Grid>
                            <Grid w={'100%'}>
                                <Grid.Col span={6}>
                                    <Text weight={'bold'} >
                                        State
                                    </Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Text
                                        sx={(theme) => ({
                                            color: theme.colors.gray[5]
                                        })}
                                    >
                                        NJ
                                    </Text>
                                </Grid.Col>
                            </Grid>
                            <Grid w={'100%'}>
                                <Grid.Col span={6}>
                                    <Text weight={'bold'} >
                                        Population
                                    </Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Text
                                        sx={(theme) => ({
                                            color: theme.colors.gray[5]
                                        })}
                                    >
                                        19329
                                    </Text>
                                </Grid.Col>
                            </Grid>
                            <Grid w={'100%'}>
                                <Grid.Col span={6}>
                                    <Text weight={'bold'} >
                                        Census Year
                                    </Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Text
                                        sx={(theme) => ({
                                            color: theme.colors.gray[5]
                                        })}
                                    >
                                        2020
                                    </Text>
                                </Grid.Col>
                            </Grid>
                            <Grid w={'100%'}>
                                <Grid.Col span={6}>
                                    <Text weight={'bold'} >
                                        Organization
                                    </Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Text
                                        sx={(theme) => ({
                                            color: theme.colors.gray[5]
                                        })}
                                    >
                                        Township Council
                                    </Text>
                                </Grid.Col>
                            </Grid>
                        </Flex>
                    </Grid.Col>
                    <Grid.Col span={7} pl={0}>
                        <Box
                            w={'100%'}
                            sx={(theme) => ({
                                borderTop: `1px solid ${theme.colors.border[1]}`,
                                borderLeft: `1px solid ${theme.colors.border[1]}`,
                            })}
                            p={10}
                        >
                            <Text>Resolution 24-65 WHEREAS, the Borough of Deal, is looking to utilize a third-party vendor for payroll, and; WHEREAS, the Borough has researched four (4) different vendors and received quotes from each vendor; and WHEREAS, the Borough has determined that the best option to utilize is Primepoint, Westampton, NJ; and WHEREAS, the Local Finance Board of the State of New Jersey adopted formal rules regarding "Electronic Disbursement Controls for Payroll Purposes" in order to provide formal authority for local governments to hire third- party payroll services/disbursing services to disburse funds to payroll agencies; and WHEREAS, in order to have a payroll servicer provide disbursement services, the Board of Commissioners of the Borough of Deal must formally approve the principle of a third-party having access to Borough funds, formally assigning responsibility to an official to oversee the process and approving all contracts. NOW, THEREFORE, BE IT ORDAINED, by the Board of Commissioners of the Borough of Deal that Third-Party Payroll Disbursement is hereby</Text>
                        </Box>
                    </Grid.Col>
                </Grid>
            </ScrollArea>
        </Modal>
    </Box >
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