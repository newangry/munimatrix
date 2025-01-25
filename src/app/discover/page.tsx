"use client"
import Filter from "@/components/discover/filter";
import Information from "@/components/discover/information";
import { Box, Grid } from "@mantine/core";

const Discover = () => {
    return <Box>
        <Grid>
            <Grid.Col span={3}>
                <Filter />
            </Grid.Col>
            <Grid.Col span={9}>
                <Information />
            </Grid.Col>
        </Grid>
    </Box>
}

export default Discover;