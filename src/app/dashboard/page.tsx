"use client"
import Filter from "@/components/dashboard/filter";
import Table from "@/components/dashboard/table";
import { Box } from "@mantine/core";

const Dashboard = () => {
    return <Box>
        <Filter />
        <Table />
    </Box>
}

export default Dashboard;