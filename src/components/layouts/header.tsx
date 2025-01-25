"use client"
import HomeContext from "@/state/index.context";
import { PageProps } from "@/types/layout";
import { ActionIcon, Burger, Drawer, Flex, Select, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBellRinging, IconBellRinging2, IconRings, IconSearch, IconSettingsQuestion, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { FC, useContext, useEffect, useState } from "react"
interface Props {
    pages: PageProps[]
}

const MyHeader: FC<Props> = ({ pages }) => {
    const [searchValue, onSearchChange] = useState('');
    const [opened, { open, close }] = useDisclosure(false);
    const router = useRouter();

    const {
        state: { page },
        dispatch: homeDispatch,
    } = useContext(HomeContext);

    useEffect(() => {
    }, [])

    return (
        <Flex
            justify={'space-between'}
            align={'center'}
        >
            <Flex
                align={'center'}
            >
                <Burger
                    opened={opened}
                    onClick={open}
                    size="lg"
                    mr="xl"
                />
                <Text>
                    Icon
                </Text>
            </Flex>
            <Select
                placeholder="Search"
                searchable
                onSearchChange={onSearchChange}
                searchValue={searchValue}
                nothingFound="No options"
                size="md"
                icon={<IconSearch size="1.2rem" />}
                data={[]}
                id="search"
                sx={(theme) => ({
                    width: 500,
                    input: {
                        background: "transparent",
                        color: "white"
                    }
                })}
            />
            <Flex
                gap={30}
            >
                <ActionIcon variant="transparent">
                    <IconSettingsQuestion />
                </ActionIcon>
                <ActionIcon variant="transparent">
                    <IconBellRinging />
                </ActionIcon>
                <ActionIcon variant="transparent">
                    <IconUser />
                </ActionIcon>
            </Flex>
            <Drawer opened={opened} onClose={close} title="LogoIcon" size={'250px'}>
                <Flex
                    direction={'column'}
                    gap={30}
                    pt={30}
                >
                    {
                        pages.map((_page, index) =>
                            <Flex
                                gap={20}
                                key={`header-page-${index}`}
                                sx={(theme) => ({
                                    cursor: 'pointer'
                                })}
                                onClick={() => {
                                    router.push(_page.path);
                                    homeDispatch({
                                        "field": 'page',
                                        "value": _page.path
                                    })
                                    close()
                                }}
                            >
                                {_page.icon}
                                <Text
                                    sx={(theme) => ({
                                        color: page == _page.path ? "white" : theme.colors.gray[6]
                                    })}
                                >
                                    {_page.name}
                                </Text>
                            </Flex>
                        )
                    }

                </Flex>
            </Drawer>
        </Flex>
    )
}

export default MyHeader;