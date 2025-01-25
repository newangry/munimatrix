import { Box, Center, Flex, Grid, Text } from "@mantine/core";
import { FC } from "react";
import isMobile from "@/components/isMobile";

interface Props {

}

const Information: FC<Props> = ({ }) => {
    return <Box
        sx={(theme) => ({
            background: theme.colors["bg-colors"][0],

        })}
    >
        <Flex
            justify={'space-between'}
            p={20}
            sx={(theme) => ({
                borderBottom: `1px solid ${theme.colors.border[1]}`
            })}
            direction={ isMobile() ? 'column' : 'row' }
        >
            <Box>
                <Text
                    sx={(theme) => ({
                        color: theme.colors.gray[6]
                    })}
                    size={'0.7rem'}
                >
                    COUNTRY
                </Text>
                <Text mt={15}>
                    --
                </Text>
            </Box>
            <Box>
                <Text
                    sx={(theme) => ({
                        color: theme.colors.gray[6]
                    })}
                    size={'0.7rem'}
                >
                    SUBTYPE
                </Text>
                <Text mt={15}>
                    --
                </Text>
            </Box>
            <Box>
                <Text
                    sx={(theme) => ({
                        color: theme.colors.gray[6]
                    })}
                    size={'0.7rem'}
                >
                    EVENT TYPE
                </Text>
                <Text mt={15}>
                    --
                </Text>
            </Box>
            <Box>
                <Text
                    sx={(theme) => ({
                        color: theme.colors.gray[6]
                    })}
                    size={'0.7rem'}
                >
                    EVENT SUBTYPE
                </Text>
                <Text mt={15}>
                    --
                </Text>
            </Box>
        </Flex>
        <Grid
        >
            <Grid.Col sm={12} md={4} lg={4}
                p={20}
            >
                <Box
                    p={20}
                    sx={(theme) => ({
                        borderRight: `1px solid ${theme.colors.border[1]}`
                    })}
                >
                    <Text
                        sx={(theme) => ({
                            color: theme.colors.gray[6],
                            fontWeight: 600
                        })}
                    >
                        Average
                    </Text>
                    <Text
                        weight={800}
                        size={'2rem'}
                    >
                        $0.00
                    </Text>
                </Box>
            </Grid.Col>
            <Grid.Col md={4} lg={4} sm={12}
                p={20}
            >
                <Box
                    p={20}
                    sx={(theme) => ({
                        borderRight: `1px solid ${theme.colors.border[1]}`
                    })}
                >
                    <Text
                        sx={(theme) => ({
                            color: theme.colors.gray[6],
                            fontWeight: 600
                        })}
                    >
                        Average
                    </Text>
                    <Text
                        weight={800}
                        size={'2rem'}
                    >
                        $0.00
                    </Text>
                </Box>
            </Grid.Col>
            <Grid.Col md={4} lg={4} sm={12}
                p={20}
            >
                <Box
                    p={20}
                >
                    <Text
                        sx={(theme) => ({
                            color: theme.colors.gray[6],
                            fontWeight: 600
                        })}
                    >
                        Average
                    </Text>
                    <Text
                        weight={800}
                        size={'2rem'}
                    >
                        $0.00
                    </Text>
                </Box>
            </Grid.Col>
        </Grid>
        <Flex
            justify={'space-between'}
            p={15}
            sx={(theme) => ({
                borderBottom: `1px solid ${theme.colors.border[1]}`,
                borderTop: `1px solid ${theme.colors.border[1]}`
            })}
            pl={30}
            pr={30}
            direction={ isMobile() ? 'column' : 'row' }
        >
            <Text
                weight={600}
                sx={(theme) => ({
                    color: theme.colors.gray[6]
                })}
                size={"0.8rem"}
            >MUNICIPALITY</Text>
            <Text
                weight={600}
                sx={(theme) => ({
                    color: theme.colors.gray[6]
                })}
                size={"0.8rem"}
            >DATE</Text>
            <Text
                weight={600}
                sx={(theme) => ({
                    color: theme.colors.gray[6]
                })}
                size={"0.8rem"}
            >COMPANY</Text>
            <Text
                weight={600}
                sx={(theme) => ({
                    color: theme.colors.gray[6]
                })}
                size={"0.8rem"}
            >MODEL</Text>
            <Text
                weight={600}
                sx={(theme) => ({
                    color: theme.colors.gray[6]
                })}
                size={"0.8rem"}
            >PRICE</Text>
        </Flex>
        <Box
            h={335}
        >
            <Center pt={100}>
                <Text size={"0.8rem"}>
                    Use the search tool on the left to look up pricing information
                </Text>
            </Center>

        </Box>
    </Box>
}

export default Information;