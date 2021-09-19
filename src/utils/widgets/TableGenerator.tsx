import React from 'react'
import {
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableCellProps,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
}))

interface ITableHead {
    name: string
    props: TableCellProps
}

interface ITableGenerator {
    tableHeaders: ITableHead[]
}

export const TableGenerator: React.FC<ITableGenerator> = ({
    children,
    tableHeaders,
}) => {
    const classes = useStyles()

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {tableHeaders.map(({ name, props }, key) => {
                            return (
                                <TableCell key={key + name} {...props}>
                                    {name}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>{children}</TableBody>
            </Table>
        </TableContainer>
    )
}

// {
/* {data?.fetch_all_applications.map(
                        ({ id, application_name, cost, plan }) => (
                            <TableRow key={id}>
                                <TableCell component="th" scope="row">
                                    <Typography variant="h4" component="h6">
                                        <Link
                                            to={`/dashboard/apps/${application_name}`}
                                            state={{ application_id: id }}
                                        >
                                            {application_name}
                                        </Link>
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">10/10/10</TableCell>
                                <TableCell align="right">10/10/10</TableCell>
                                <TableCell align="right">{cost}</TableCell>
                                <TableCell align="right">{plan}</TableCell>
                            </TableRow>
                        ),
                    )} */
// }
