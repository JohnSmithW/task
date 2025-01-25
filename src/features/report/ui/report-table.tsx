import React, { useMemo } from 'react';
import { Table, Spin } from 'antd';
import type { TableProps } from 'antd';
import { useReportTable } from '../model/useReportTable';
import { ReportData } from '../model/types';

const columns: TableProps<ReportData>['columns'] = [
  {
    title: 'Report Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Name',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Start Date',
    dataIndex: 'startDate',
    key: 'startDate',
  },
  {
    title: 'End Date',
    dataIndex: 'endDate',
    key: 'endDate',
  },
];

export const ReportTable: React.FC = () => {
  const { tableData, isLoading } = useReportTable();

  const memoizedData = useMemo(() => tableData || [], [tableData]);

  return isLoading ? (
    <Spin />
  ) : (
    <Table<ReportData>
      style={{ width: '100%' }}
      columns={columns}
      rowKey={(record) => record.id}
      dataSource={memoizedData || []}
    />
  );
};
