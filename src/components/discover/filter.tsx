import { Button, Flex, Select, Text } from "@mantine/core";
import { FC } from "react";

interface Props {

}

const Filter: FC<Props> = ({ }) => {
    return <Flex
        p={15}
        pt={25}
        gap={20}
        direction={'column'}
        sx={(theme) => ({
            background: theme.colors["bg-colors"][0]
        })}
    >
        <Select
            label="Country"
            placeholder="----Select-----"
            data={[
                { value: 'Atlantic', label: 'Atlantic' },
            ]}
            size="lg"
        />
        <Select
            label="Primary Type"
            placeholder="----Select-----"
            data={[
                { value: 'Atlantic', label: 'Atlantic' },
            ]}
            size="lg"
        />
        <Select
            label="SubType"
            placeholder="----Select-----"
            data={[
                { value: 'Atlantic', label: 'Atlantic' },
            ]}
            size="lg"
        />
        <Select
            label="Event Type"
            placeholder="----Select-----"
            data={[
                { value: 'Atlantic', label: 'Atlantic' },
            ]}
            size="lg"
        />
        <Select
            label="Event SubType"
            placeholder="----Select-----"
            data={[
                { value: 'Atlantic', label: 'Atlantic' },
            ]}
            size="lg"
        />
        <Button
            fullWidth
            sx={(theme) => ({
                background: theme.colors["btn-primary"][1]
            })}
            size="lg"
        >
            Show Results
        </Button>
        <Flex justify={'flex-end'}>
            <Text
                sx={(theme) => ({
                    color: theme.colors.link,
                    textDecoration: 'underline',
                    cursor: 'pointer'
                })}
                mr={'20%'}
            >
                Reset all
            </Text>
        </Flex>
    </Flex>
}

export default Filter;