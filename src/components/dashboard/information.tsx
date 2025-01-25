"use client"
import { Accordion, Box, Button, Flex, Text } from '@mantine/core';
import { FC } from 'react'
interface Props {

}

const Information: FC<Props> = ({ }) => {
    return (
        <Box
            p={20}
            sx={(theme) => ({
                background: theme.colors["bg-colors"][0]
            })}
            mt={25}
        >
            <Text
                size={'lg'}
                weight={700}
            >
                Asbury Park, NJ
            </Text>
            <Text
                size={'md'}
                mt={10}
                sx={(theme) => ({
                    color: theme.colors.gray[3]
                })}
            >
                Since 9/1
            </Text>
            <Accordion defaultValue="customization-2" mt={30}>
                <Accordion.Item value="customization">
                    <Accordion.Control>
                        <Text weight={500}>
                            28 Contracts
                        </Text>
                        <Text weight={600} sx={(theme) => ({
                            color: theme.colors.money
                        })}>
                            $2000,000,00
                        </Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <Flex direction={'column'}>
                            <Flex
                                justify={'space-between'}
                                w={'100%'}
                                pt={10}
                                pb={10}
                                sx={(theme) => ({
                                    borderBottom: `1px solid ${theme.colors.border[1]}`
                                })}
                            >
                                <Box>
                                    <Text weight={600}>Environmental</Text>
                                    <Text weight={100}>
                                        $237,000.00 | Sep 17
                                    </Text>
                                </Box>
                                <Button
                                    sx={(theme) => ({
                                        fontSize: '10px',
                                        background: theme.colors["btn-primary"][1],
                                        padding: '10px'
                                    })}
                                    
                                >
                                    View Source
                                </Button>
                            </Flex>
                            <Flex
                                justify={'space-between'}
                                w={'100%'}
                                pt={10}
                                pb={10}
                                sx={(theme) => ({
                                    borderBottom: `1px solid ${theme.colors.border[1]}`
                                })}
                            >
                                <Box>
                                    <Text weight={600}>Environmental</Text>
                                    <Text weight={100}>
                                        $237,000.00 | Sep 17
                                    </Text>
                                </Box>
                                <Button
                                    sx={(theme) => ({
                                        fontSize: '10px',
                                        background: theme.colors["btn-primary"][1],
                                        padding: '10px'
                                    })}
                                    
                                >
                                    View Source
                                </Button>
                            </Flex>
                            <Flex
                                justify={'space-between'}
                                w={'100%'}
                                pt={10}
                                pb={10}
                                sx={(theme) => ({
                                })}
                            >
                                <Box>
                                    <Text weight={600}>Environmental</Text>
                                    <Text weight={100}>
                                        $237,000.00 | Sep 17
                                    </Text>
                                </Box>
                                <Button
                                    sx={(theme) => ({
                                        fontSize: '10px',
                                        background: theme.colors["btn-primary"][1],
                                        padding: '10px'
                                    })}
                                    
                                >
                                    View Source
                                </Button>
                            </Flex>
                        </Flex>
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="customization-2">
                    <Accordion.Control>
                        <Text weight={500}>
                            28 Contracts
                        </Text>
                        <Text weight={600} sx={(theme) => ({
                            color: theme.colors.money
                        })}>
                            $2000,000,00
                        </Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <Flex direction={'column'}>
                            <Flex
                                justify={'space-between'}
                                w={'100%'}
                                pt={10}
                                pb={10}
                                sx={(theme) => ({
                                    borderBottom: `1px solid ${theme.colors.border[1]}`
                                })}
                            >
                                <Box>
                                    <Text weight={600}>Environmental</Text>
                                    <Text weight={100}>
                                        $237,000.00 | Sep 17
                                    </Text>
                                </Box>
                                <Button
                                    sx={(theme) => ({
                                        fontSize: '10px',
                                        background: theme.colors["btn-primary"][1],
                                        padding: '10px'
                                    })}
                                    
                                >
                                    View Source
                                </Button>
                            </Flex>
                            <Flex
                                justify={'space-between'}
                                w={'100%'}
                                pt={10}
                                pb={10}
                                sx={(theme) => ({
                                    borderBottom: `1px solid ${theme.colors.border[1]}`
                                })}
                            >
                                <Box>
                                    <Text weight={600}>Environmental</Text>
                                    <Text weight={100}>
                                        $237,000.00 | Sep 17
                                    </Text>
                                </Box>
                                <Button
                                    sx={(theme) => ({
                                        fontSize: '10px',
                                        background: theme.colors["btn-primary"][1],
                                        padding: '10px'
                                    })}
                                    
                                >
                                    View Source
                                </Button>
                            </Flex>
                            <Flex
                                justify={'space-between'}
                                w={'100%'}
                                pt={10}
                                pb={10}
                                sx={(theme) => ({
                                })}
                            >
                                <Box>
                                    <Text weight={600}>Environmental</Text>
                                    <Text weight={100}>
                                        $237,000.00 | Sep 17
                                    </Text>
                                </Box>
                                <Button
                                    sx={(theme) => ({
                                        fontSize: '10px',
                                        background: theme.colors["btn-primary"][1],
                                        padding: '10px'
                                    })}
                                    
                                >
                                    View Source
                                </Button>
                            </Flex>
                        </Flex>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="customization-1">
                    <Accordion.Control>
                        <Text weight={500}>
                            28 Contracts
                        </Text>
                        <Text weight={600} sx={(theme) => ({
                            color: theme.colors.money
                        })}>
                            $2000,000,00
                        </Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <Flex direction={'column'}>
                            <Flex
                                justify={'space-between'}
                                w={'100%'}
                                pt={10}
                                pb={10}
                                sx={(theme) => ({
                                    borderBottom: `1px solid ${theme.colors.border[1]}`
                                })}
                            >
                                <Box>
                                    <Text weight={600}>Environmental</Text>
                                    <Text weight={100}>
                                        $237,000.00 | Sep 17
                                    </Text>
                                </Box>
                                <Button
                                    sx={(theme) => ({
                                        fontSize: '10px',
                                        background: theme.colors["btn-primary"][1],
                                        padding: '10px'
                                    })}
                                    
                                >
                                    View Source
                                </Button>
                            </Flex>
                            <Flex
                                justify={'space-between'}
                                w={'100%'}
                                pt={10}
                                pb={10}
                                sx={(theme) => ({
                                    borderBottom: `1px solid ${theme.colors.border[1]}`
                                })}
                            >
                                <Box>
                                    <Text weight={600}>Environmental</Text>
                                    <Text weight={100}>
                                        $237,000.00 | Sep 17
                                    </Text>
                                </Box>
                                <Button
                                    sx={(theme) => ({
                                        fontSize: '10px',
                                        background: theme.colors["btn-primary"][1],
                                        padding: '10px'
                                    })}
                                    
                                >
                                    View Source
                                </Button>
                            </Flex>
                            <Flex
                                justify={'space-between'}
                                w={'100%'}
                                pt={10}
                                pb={10}
                                sx={(theme) => ({
                                })}
                            >
                                <Box>
                                    <Text weight={600}>Environmental</Text>
                                    <Text weight={100}>
                                        $237,000.00 | Sep 17
                                    </Text>
                                </Box>
                                <Button
                                    sx={(theme) => ({
                                        fontSize: '10px',
                                        background: theme.colors["btn-primary"][1],
                                        padding: '10px'
                                    })}
                                    
                                >
                                    View Source
                                </Button>
                            </Flex>
                        </Flex>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </Box>
    )
}

export default Information;