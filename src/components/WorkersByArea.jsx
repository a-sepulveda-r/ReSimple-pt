import { Accordion, Table } from 'flowbite-react';
import data from '../data/data.json';

export const WorkersByArea = () => {
  const companies = data.COMPANIES;
  const employees = data.EMPLOYEES;

  return (
    <div className='content-container'>
      <div className='scrollable-content container mx-auto my-9'>
        <Accordion collapseAll>
          {companies.map((company) => (
            <Accordion.Panel key={company.COMPANY_ID}>
              <Accordion.Title>{company.COMPANY_NAME}</Accordion.Title>
              <Accordion.Content>
                {company.AREAS.map((area) => (
                  <div key={area.AREA_ID}>
                    <h3 className='my-2 text-green-600 font-semibold'>
                      {area.AREA_NAME}
                    </h3>
                    <div className='overflow-x-auto'>
                      <Table hoverable>
                        <Table.Head>
                          <Table.HeadCell>ID_EMPRESA</Table.HeadCell>
                          <Table.HeadCell>ID_AREA</Table.HeadCell>
                          <Table.HeadCell>RUT_TRABAJADOR</Table.HeadCell>
                          <Table.HeadCell>NOMBRE_TRABAJADOR</Table.HeadCell>
                          <Table.HeadCell>EDAD</Table.HeadCell>
                          <Table.HeadCell>PROFESION</Table.HeadCell>
                          <Table.HeadCell>CARGO</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className='divide-y'>
                          {employees
                            .filter(
                              (employee) =>
                                employee.COMPANY_ID === company.COMPANY_ID &&
                                employee.AREA_ID === area.AREA_ID
                            )
                            .map((employee) => (
                              <Table.Row
                                key={employee.WORKER_ID}
                                className='bg-white dark:border-gray-700 dark:bg-gray-800'
                              >
                                <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                                  {employee.COMPANY_ID}
                                </Table.Cell>
                                <Table.Cell>{employee.AREA_ID}</Table.Cell>
                                <Table.Cell>{employee.WORKER_ID}</Table.Cell>
                                <Table.Cell>{employee.WORKER_NAME}</Table.Cell>
                                <Table.Cell>{employee.AGE}</Table.Cell>
                                <Table.Cell>{employee.PROFESSION}</Table.Cell>
                                <Table.Cell>{employee.POSITION}</Table.Cell>
                              </Table.Row>
                            ))}
                        </Table.Body>
                      </Table>
                    </div>
                  </div>
                ))}
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
