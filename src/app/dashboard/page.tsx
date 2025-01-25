"use client"
import Filter from "@/components/dashboard/filter";
import Information from "@/components/dashboard/information";
import MyTable from "@/components/dashboard/table";
import { Box, Grid } from "@mantine/core";

const Dashboard = () => {
    return <Box>
        <Filter />
        <Grid>
            <Grid.Col lg={9} md={9} sm={12}>
                <MyTable />
            </Grid.Col>
            <Grid.Col lg={3} md={3} sm={12}>
                <Information />
            </Grid.Col>
        </Grid>
    </Box>
}

export default Dashboard;