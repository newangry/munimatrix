"use client"
import Filter from "@/components/discover/filter";
import Information from "@/components/discover/information";
import { Box, Grid } from "@mantine/core";

const Discover = () => {
    return <Box>
        <Grid>
            <Grid.Col md={3} sm={12} lg={3}>
                <Filter />
            </Grid.Col>
            <Grid.Col md={9} sm={12} lg={9}>
                <Information />
            </Grid.Col>
        </Grid>
    </Box>
}

export default Discover;