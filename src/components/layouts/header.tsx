"use client"
import HomeContext from "@/state/index.context";
import { PageProps } from "@/types/layout";
import { Accordion, ActionIcon, Box, Burger, Button, Center, Drawer, Flex, Modal, Popover, Select, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBellRinging, IconBellRinging2, IconRings, IconSearch, IconSettingsQuestion, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { FC, useContext, useEffect, useState } from "react";
import isMobile from "@/components/isMobile";
interface Props {
    pages: PageProps[]
}

const MyHeader: FC<Props> = ({ pages }) => {
    const [searchValue, onSearchChange] = useState('');
    const [opened, { open, close }] = useDisclosure(false);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const router = useRouter();
    const {
        state: { page },
        dispatch: homeDispatch,
    } = useContext(HomeContext);

    useEffect(() => {
        homeDispatch(({
            "field": "page",
            "value": window.location.pathname
        }))
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
                    width: isMobile() ? 300 : 500,
                    display: isMobile() ? "none" : "block",
                    input: {
                        background: "transparent",
                        color: "white"
                    }
                })}
            />
            <Flex
                gap={30}
            >
                <ActionIcon variant="transparent" onClick={() => { setOpenModal(true) }}>
                    <IconSettingsQuestion />
                </ActionIcon>
                <ActionIcon variant="transparent">
                    <IconBellRinging />
                </ActionIcon>
                <Popover>
                    <Popover.Target>
                        <ActionIcon variant="transparent">
                            <IconUser />
                        </ActionIcon>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <Box
                            p={30}
                        >
                            <Text
                                sx={(theme) => ({
                                    color: theme.colors.gray[6]
                                })}
                                size={'sm'}
                                weight={'bold'}
                            >
                                PROFILE
                            </Text>
                            <Box
                                mt={20}
                            >
                                <Text weight={'bold'}>
                                    Jason Silberan
                                </Text>
                                <Text
                                    sx={(theme) => ({
                                        color: theme.colors.gray[5]
                                    })}
                                    size={'0.8rem'}
                                >
                                    jason.silberman@email.com
                                </Text>
                            </Box>
                            <Button
                                sx={(theme) => ({
                                    background: theme.colors["btn-primary"][1]
                                })}
                                fullWidth
                                mt={30}
                            >
                                Logout
                            </Button>
                        </Box>
                    </Popover.Dropdown>
                </Popover>
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
            <Modal opened={openModal} onClose={() => { setOpenModal(false) }} fullScreen
            >
                <Flex
                    justify={'center'}
                    align={'center'}
                    w={'100%'}
                    direction={'column'}
                >
                    <Flex
                        justify={'center'}
                        align={'center'}
                        w={isMobile() ? "100%" : "60%"}
                        p={20}
                        direction={'column'}
                    >
                        <Center><Text size={'1.8rem'} weight={'bold'}>Frequently Asked Questions</Text></Center>
                        <Center><Text mt={20} size={'sm'} sx={(theme) => ({
                            color: theme.colors.gray[5]
                        })}>These are the most commonly asked questions about Munimatrix</Text></Center>
                        <Box mt={30} w={'100%'}>
                            <Accordion defaultValue="customization" sx={(theme) => ({
                                panel: {
                                    paddingLeft: 0
                                }
                            })}>
                                <Accordion.Item value="customization">
                                    <Accordion.Control>
                                        <Text weight={'bold'}>
                                            What is Munimatrix?
                                        </Text>
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <Text sx={(theme) => ({
                                            color: theme.colors.gray[5]
                                        })}>
                                            I'm free, even if you don't have the highest level of mass. Trucks and advertising on the beach? A great bed dignissim netus class duis odio mauris. Rutrum nor his associates.
                                        </Text>
                                    </Accordion.Panel>
                                </Accordion.Item>
                                <Accordion.Item value="customization1">
                                    <Accordion.Control>
                                        <Text weight={'bold'}>
                                            Pellentesque lacus integer, eget rutrum libero inceptos?
                                        </Text>
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <Text sx={(theme) => ({
                                            color: theme.colors.gray[5]
                                        })}>
                                            I'm free, even if you don't have the highest level of mass. Trucks and advertising on the beach? A great bed dignissim netus class duis odio mauris. Rutrum nor his associates.
                                        </Text>
                                    </Accordion.Panel>
                                </Accordion.Item>
                                <Accordion.Item value="customization2">
                                    <Accordion.Control>
                                        <Text weight={'bold'}>
                                            Etiam retrum neque viverra eggestas vehiclula aliquam?
                                        </Text>
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <Text sx={(theme) => ({
                                            color: theme.colors.gray[5]
                                        })}>
                                            I'm free, even if you don't have the highest level of mass. Trucks and advertising on the beach? A great bed dignissim netus class duis odio mauris. Rutrum nor his associates.
                                        </Text>
                                    </Accordion.Panel>
                                </Accordion.Item>
                                <Accordion.Item value="customization3">
                                    <Accordion.Control>
                                        <Text weight={'bold'}>
                                            Curabitur morbi sagittis per ridiculus amet himenaeos himemnaeos?
                                        </Text>
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <Text sx={(theme) => ({
                                            color: theme.colors.gray[5]
                                        })}>
                                            I'm free, even if you don't have the highest level of mass. Trucks and advertising on the beach? A great bed dignissim netus class duis odio mauris. Rutrum nor his associates.
                                        </Text>
                                    </Accordion.Panel>
                                </Accordion.Item>
                                <Accordion.Item value="customization4">
                                    <Accordion.Control>
                                        <Text weight={'bold'}>
                                            mattis in non ad sociosqu litora. Placerat vitae imperdiet est libero ridiculus scelerisque proin?
                                        </Text>
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <Text sx={(theme) => ({
                                            color: theme.colors.gray[5]
                                        })}>
                                            I'm free, even if you don't have the highest level of mass. Trucks and advertising on the beach? A great bed dignissim netus class duis odio mauris. Rutrum nor his associates.
                                        </Text>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        </Box>
                    </Flex>
                </Flex>
            </Modal>
        </Flex>
    )
}

export default MyHeader;