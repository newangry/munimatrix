"use client"
import { FC, ReactNode, useEffect, useState } from "react";
import HomeContext from "@/state/index.context";
import { useCreateReducer } from "@/hooks/useCreateReducer";
import { HomeInitialState, initialState } from "@/state/index.state";
import {
    AppShell,
    ColorSchemeProvider,
    MantineProvider,
    Navbar,
    useMantineTheme,
    Header,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { IconBuildings, IconContract, IconHeart, IconHome, IconWorldSearch } from "@tabler/icons-react";
import MyHeader from "./header";
import MyNavbar from "./navbar";
import { PageProps } from "@/types/layout";

interface Props {
    children: ReactNode,
}

const PAGES = [
    {
        name: 'Home', icon: <IconHome />, path: '/dashboard'
    },
    {
        name: 'Discover', icon: <IconWorldSearch />, path: '/discover'
    },
    {
        name: 'Companies', icon: <IconBuildings />, path: '/companies'
    },
    {
        name: 'Saved Searches', icon: <IconHeart />, path: '/saved_search'
    },
    {
        name: 'Contracts', icon: <IconContract />, path: '/contracts'
    }
]

const Layout: FC<Props> = ({ children }) => {
    const [isClient, setIsClient] = useState<boolean>(false);
    const contextValue = useCreateReducer<HomeInitialState>({
        initialState,
    });
    const [pages, setPages] = useState<PageProps[]>([]);
    const theme = useMantineTheme();
    const {
        state: { colorScheme },
    } = contextValue;

    useEffect(() => {
        setIsClient(true);
        setPages(PAGES);
    }, [])

    return (
        <HomeContext.Provider
            value={{
                ...contextValue,
            }}
        >
            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={() => { }}
            >
                <MantineProvider
                    theme={{
                        fontFamily: 'Georgia, serif', // Set global font family
                        colorScheme: 'dark', // Choose between 'light' or 'dark' modes
                        globalStyles: (theme) => ({
                            body: {
                                backgroundColor: theme.colorScheme === 'dark' ? '#1a1a1a' : '#ffffff', // Default background color
                                color: theme.colorScheme === 'dark' ? '#ffffff' : '#000000', // Default text color
                            },
                        }),
                        colors: {
                            'btn-primary': ['#0562b1', '#5699ff'],
                            'border': ["#266467", "#20456a"],
                            'link': ["#098db5"],
                            'bg-colors': ["#0d2945"],
                            'money': ["#00ff8c"]
                        },
                        components: {
                            Text: {
                                styles: (theme) => ({
                                    root: {
                                        color: "white"
                                    }
                                })
                            },
                            Accordion: {
                                styles: (theme) => ({
                                    control: {
                                        color: "white",
                                        borderBottom: "none",
                                        '&:hover': {
                                            backgroundColor: "transparent"
                                        },
                                        paddingLeft: '0px'
                                    },
                                    panel: {
                                        color: "white"
                                    },
                                    item: {
                                        borderBottom: "none",
                                        borderTop: `1px solid ${theme.colors.border[1]}`,
                                        color: "white"
                                    },
                                })
                            },
                            Table: {
                                styles: (theme) => ({
                                    thead: {
                                        borderColor: theme.colors.border
                                    },
                                    tr: {
                                        borderColor: theme.colors.border
                                    },
                                    th: {
                                        borderColor: theme.colors.border
                                    }
                                })
                            },
                            Input: {
                                styles: (theme) => ({
                                    input: {
                                        backgroundColor: "transparent", // Dark or light mode
                                        color: "white",
                                        borderColor: '#266467'
                                    },
                                }),
                            },
                            Checkbox: {
                                styles: (theme) => ({
                                    root: {
                                        background: "transparent"
                                    },
                                    input: {
                                        border: `1px solid white`,
                                        background: "transparent"
                                    },
                                    label: {
                                        color: "white"
                                    }
                                })
                            },
                            Popover: {
                                styles: (theme) =>({
                                    dropdown: {
                                        background: "#0d2945",
                                        borderColor: '#266467',
                                        padding: '0px',
                                    }
                                })
                            },
                            Drawer: {
                                styles: (theme) => ({
                                    content: {
                                        backgroundColor: "#0d2945",
                                        color: "white",
                                        width: 200
                                    },
                                    header: {
                                        backgroundColor: "#0d2945",
                                        color: "white"
                                    }
                                }),
                            },
                            Modal: {
                                styles: (theme) => ({
                                    body: {
                                        backgroundColor: theme.colors["bg-colors"][0],
                                        padding: 0
                                    },
                                    header: {
                                        backgroundColor: theme.colors["bg-colors"][0],
                                    }
                                })
                            },
                            Select: {
                                styles: (theme) => ({
                                    dropdown: {
                                        backgroundColor: "#0d2945",
                                        color: "white",
                                        borderColor: '#266467'
                                    },
                                    label: {
                                        color: "white"
                                    },
                                    input: {
                                        background: "white",
                                        color: "black"
                                    },
                                    item: {
                                        color: 'white',
                                        '&[data-hovered]': {
                                            backgroundColor: "#152247",
                                            color: "white",
                                        },
                                        '&[data-selected]': {
                                            backgroundColor: "#152247",
                                            color: "white",
                                        },
                                    }
                                }),
                            }
                        },
                    }}
                    withGlobalStyles
                    withNormalizeCSS
                >
                    {
                        isClient &&
                        <AppShell
                            styles={{
                                main: {
                                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                                },
                            }}
                            navbarOffsetBreakpoint="sm"
                            asideOffsetBreakpoint="sm"
                            navbar={
                                <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                                    <MyNavbar
                                        pages={pages}
                                    />
                                </Navbar>
                            }
                            header={
                                <Header height={{ base: 70, md: 70 }} p="md">
                                    <MyHeader 
                                        pages={pages}
                                    />
                                </Header>
                            }
                        >
                            {
                                children
                            }
                        </AppShell>
                    }
                    <Notifications />
                </MantineProvider>
            </ColorSchemeProvider>
        </HomeContext.Provider>
    );
}

export default Layout;

