"use client"
import { Box, Button, Checkbox, Flex, Grid, Popover, ScrollArea, Text } from "@mantine/core";
import { IconHome, IconPlus, IconX } from "@tabler/icons-react";
import { FC, useRef, useState } from "react";

interface Props {

}

const Filter: FC<Props> = ({ }) => {

    const [countries, setCountries] = useState<string[]>([]);
    const [filters, setFilters] = useState<string[]>(["Ausbury Park"]);
    const [selectedFilter, setSelectedFilter] = useState<number>(0);
    
    return (
        <Box>
            <Flex
                gap={20}
                align={'center'}
            >
                {
                    filters.map((filter: string, index) =>
                        <Button
                            sx={(theme) => ({
                                background: theme.colors['btn-primary'][0]
                            })}
                            size="lg"
                            key={`filter-btn-${index}`}
                            rightIcon={<IconX />}
                        >
                            {filter}
                        </Button>
                    )
                }
                <Popover width={500} trapFocus position="bottom" shadow="md">
                    <Popover.Target>
                        <IconPlus />
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
                                Add Country/Municipals
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
                                    Country
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
                                            label="Atlantic"
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
                                    Muncipal
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
                                        Atlantic
                                    </Text>
                                    <Flex
                                        pl={15}
                                        pr={15}
                                        w={'100%'}
                                        mt={15}
                                    >
                                        <Checkbox
                                            label="Bergen"
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
                                Add
                            </Button>
                        </Flex>
                    </Popover.Dropdown>
                </Popover>
            </Flex>
        </Box>
    )
}

export default Filter;