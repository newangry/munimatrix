"use client"
import { Flex, Box, Text } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { PageProps } from "@/types/layout";

interface Props {
    pages: PageProps[]
}

const MyNavbar: FC<Props> = ({ pages }) => {
    
    const router = useRouter();
    const [page, setPage] = useState<string>('');
    
    useEffect(() => {
        console.log(pages);
        setPage(window.location.pathname);
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