export const MOCK_PROJECTS = [
  Object.freeze({
    name: 'Foo Industries Redesign',
    standardRate: 20,
    description: 'A really cool project',
    id: '1234-5678-9012',
    standardHours: 8
  }),
  Object.freeze({
    name: 'ACME Inc.',
    standardRate: 120,
    description: 'Doc is annoying',
    id: '2345-9384-324523',
    standardHours: 6
  }),
    Object.freeze({
    name: 'Wayne Industries',
    standardRate: 523,
    description: 'I am Batman',
    id: '9876-6554-5123',
    standardHours: 24
  }),
]

export const MOCK_ENTRIES = [
  Object.freeze({
    id: '2342-6552-5345',
    startTime: +new Date(2017, 1, 14, 8, 23),
    endTime: +new Date(2017, 1, 14, 15, 59),
    rate: 35.50,
    projectId: '1234-5678-9012'
  }),
  Object.freeze({
    id: '9786-2345-1234',
    startTime: +new Date(2017, 1, 15, 10, 59),
    endTime: +new Date(2017, 1, 15, 18, 21),
    rate: 35.50,
    projectId: '1234-5678-9012'
  }),
  Object.freeze({
    id: '3456-3456-3244',
    startTime: +new Date(2017, 1, 16, 11, 22),
    endTime: +new Date(2017, 1, 16, 20, 59),
    rate: 35.50,
    projectId: '1234-5678-9012'
  }),
  Object.freeze({
    id: '5346-1234-1243',
    startTime: +new Date(2017, 1, 17, 3, 45),
    endTime: +new Date(2017, 1, 17, 11, 22),
    rate: 35.50,
    projectId: '1234-5678-9012'
  }),
  Object.freeze({
    id: '4567-2341-2369-7684',
    startTime: +new Date(2017, 1, 14, 8, 23),
    endTime: +new Date(2017, 1, 14, 15, 59),
    rate: 15.50,
    projectId: '2345-9384-324523'
  }),
  Object.freeze({
    id: '9845-6524-2435',
    startTime: +new Date(2017, 1, 14, 8, 23),
    endTime: +new Date(2017, 1, 14, 15, 59),
    rate: 100.50,
    projectId: '2345-9384-324523'
  }),
]
