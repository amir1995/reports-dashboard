import classNames from 'classnames';
import React, { useEffect } from 'react';
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
import { Loader } from 'ui';

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> &
  UseSortByInstanceProps<T> & {
    state: UsePaginationState<T>;
  };

type TTable = {
  columns: any[];
  isLoading?: boolean;
  error?: unknown;
  tableData: any[];
  isSuccess?: boolean;
};

export const Table = (props: TTable) => {
  const { columns, isLoading, error, tableData, isSuccess } = props;
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page, setPageSize } =
    useTable(
      {
        columns,
        data: tableData,
      },
      useGlobalFilter,
      usePagination,
      useRowSelect,
    ) as TableInstanceWithHooks<any>;

  useEffect(() => {
    setPageSize(tableData.length);
  }, [setPageSize, tableData.length]);

  if (error) {
    return <p>Error</p>;
  }

  return (
    <div>
      {!isLoading && isSuccess && tableData.length ? (
        <>
          <div className="mt-3.5 flex flex-col overflow-hidden">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-scroll max-h-64">
                  <table {...getTableProps()} className="min-w-full">
                    <thead className="bg-neutral-1000">
                      {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column, index) => (
                            <th {...column.getHeaderProps()} className="p-1.5 bg-neutral-1000 sticky top-0">
                              <div
                                className={classNames(
                                  'text-colour-b4 text-subtitle flex font-normal bg-neutral-1000',
                                  {
                                    'justify-end': headerGroup.headers.length - 1 === index,
                                    'justify-start': index === 0,
                                    'justify-center':
                                      index > 0 && index < headerGroup.headers.length - 1,
                                  },
                                )}
                              >
                                {column.render('Header')}
                              </div>
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className="overflow-hidden h-100">
                      {page.map((row, i) => {
                        prepareRow(row);
                        return (
                          <tr
                            {...row.getRowProps()}
                            className={classNames({
                              'bg-neutral-1000': i % 2 !== 0,
                              'bg-neutral-040': i % 2 === 0,
                            })}
                          >
                            {row.cells.map((cell, index) => {
                              return (
                                <td {...cell.getCellProps()} className="whitespace-nowrap p-1.5">
                                  <div
                                    className={classNames(
                                      'text-colour-b4 text-subtitle flex font-normal',
                                      {
                                        'justify-end': row.cells.length - 1 === index,
                                        'justify-start': index === 0,
                                        'justify-center': index > 0 && index < row.cells.length - 1,
                                      },
                                    )}
                                  >
                                    {cell.render('Cell')}
                                  </div>
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
    </div>
  );
};
