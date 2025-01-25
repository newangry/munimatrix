"use client"
import { Flex, Box, Text } from "@mantine/core";
import { FC, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { PageProps } from "@/types/layout";
import HomeContext from "@/state/index.context";

interface Props {
    pages: PageProps[]
}

const MyNavbar: FC<Props> = ({ pages }) => {
    
    const router = useRouter();
    
    const {
        state: { page },
        dispatch: homeDispatch,
    } = useContext(HomeContext);

    useEffect(() => {
        console.log(pages);
    }, [])
    
    return (
        <Flex
            w={'100%'}
            direction={'column'}
        >
            {
                pages.map((page_, index) =>
                    <Flex
                        key={`navbar-${index}`}
                        sx={(theme) => ({
                            background: page == page_.path ? theme.colors['btn-primary'][0] : "transparent",
                            cursor: 'pointer'
                        })}
                        w={'100%'}
                        p={10}
                        gap={10}
                        direction={'column'}
                        align={'center'}
                        justify={'center'}
                        onClick={() => {
                            router.push(page_.path);
                            homeDispatch({
                                "field": 'page',
                                "value": page_.path
                            })
                        }}
                    >
                        { page_.icon }
                        <Text
                            sx={(theme) =>({
                                textAlign: 'center',
                                color: page == page_.path ? "white" : theme.colors.gray[6]
                            })}
                            size={'sm'}
                        >
                            { page_.name }
                        </Text>
                    </Flex>
                )
            }

        </Flex>
    )
}

export default MyNavbar;