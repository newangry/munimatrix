"use client"
import Filter from "@/components/dashboard/filter";
import Information from "@/components/dashboard/information";
import MyTable from "@/components/dashboard/table";
import { Box, Grid } from "@mantine/core";

const Dashboard = () => {
    return <Box>
        <Filter />
        <Grid>
            <Grid.Col span={9}>
                <MyTable />
            </Grid.Col>
            <Grid.Col span={3}>
                <Information />
            </Grid.Col>
        </Grid>
    </Box>
}

export default Dashboard;