import React  from 'react';
import {
  TableInstance,
  useGlobalFilter,
  usePagination,
  UsePaginationInstanceProps,
  UsePaginationState,
  useRowSelect,
  UseSortByInstanceProps,
  useTable,
} from 'react-table';
import { Card, Loader } from 'ui';

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> &
  UseSortByInstanceProps<T> & {
    state: UsePaginationState<T>;
  };

type TTable = {
  columns: any[];
  title: string;
  setPage: (x: number) => void;
  setPerPage: (x: number) => void;
  isLoading: boolean;
  error: unknown;
  tableData: any[];
  isSuccess: boolean;
  pageNum: number;
};

export const Table = (props: TTable) => {
  const { columns, isLoading, error, tableData, isSuccess } =
    props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
  } = useTable(
    {
      columns,
      data: tableData,
    },
    useGlobalFilter,
    usePagination,
    useRowSelect,
  ) as TableInstanceWithHooks<any>;

  if (error) {
    return <p>Error</p>;
  }

  return (
    <Card className="my-4">
      {!isLoading && isSuccess && tableData.length ? (
        <>
          <div className="mt-2 flex flex-col overflow-hidden rounded-xl bg-neutral-200">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-xl">
                  <table {...getTableProps()} className="min-w-full">
                    <thead className="border-b border-neutral-300">
                      {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map(column => (
                            <th
                              {...column.getHeaderProps()}
                              className="text-20 rounded-sm px-6 py-5 font-medium uppercase tracking-wider text-gray-400"
                            >
                              <div className="flex justify-start">{column.render('Header')}</div>
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                      {page.map((row, i) => {
                        prepareRow(row);
                        return (
                          <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                              return (
                                <td
                                  {...cell.getCellProps()}
                                  className="whitespace-nowrap border-b border-neutral-300 bg-neutral-200 px-6 py-10"
                                >
                                  {cell.render('Cell')}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="align-center flex justify-center pt-4">
          <Loader />
        </div>
      )}
    </Card>
  );
};
