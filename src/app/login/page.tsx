"use client"
import HomeContext from "@/state/index.context";
import { Button, Center, Flex, Text, TextInput } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { FC, useContext, useEffect } from "react";

interface Props {

}

const Login: FC<Props> = ({ }) => {
    const router = useRouter();
    const {
        state: { page },
        dispatch: homeDispatch,
    } = useContext(HomeContext);

    useEffect(() => {
       
    }, [])
    return (
            <Flex
                align={'center'}
                w={'100%'}
                direction={'column'}
                gap={30}
                pt={'10%'}
            >
                <Text>ICON</Text>
                <Flex
                    gap={10}
                    direction={'column'}
                >
                    <TextInput size="xl"
                        sx={(theme) => ({
                            input: {
                                background: "white",
                                color: "black"
                            }
                        })}
                        placeholder="Email Address"
                        w={400}
                    />
                    <TextInput size="xl"
                        sx={(theme) => ({
                            input: {
                                background: "white",
                                color: "black"
                            }
                        })}
                        rightSection={
                            <IconEye size={'1.5rem'} color="black"/>
                        }
                        type="password"
                        placeholder="Password"
                    />
                    <Button size="xl"
                        sx={(theme) =>({
                            background: theme.colors["btn-primary"][1]
                        })}
                        onClick={() => {
                            homeDispatch(({
                                "field": "page",
                                "value": window.location.pathname
                            }))
                            window.location.href = "/dashboard";
                        }}
                    >
                        Login
                    </Button>
                </Flex>
            </Flex>
    )
}

export default Login;