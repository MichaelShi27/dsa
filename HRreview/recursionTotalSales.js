// `totalSales` accepts one argument, an object containing an employee who manages
// a sales team, and returns the total sales for the entire team. Note: it is possible
// that any employee also manages a team.
//
// An employee looks like this:
//
// {
//   name: 'Fred Zirdung',
//   individualSales: 125,
//   leadsInProgress: 48,
//   manages: [/* ... */]
// }
//
// EXAMPLE:
//
var salesTeam = {
  name: 'Arnaldo McDermott',
  individualSales: 14,
  leadsInProgress: 10,
  manages: [
    {
      name: 'Lavina Romaguera',
      individualSales: 15,
      leadsInProgress: 22,
      manages: [
        {
          name: 'Glen Hodkiewicz',
          individualSales: 12,
          leadsInProgress: 10,
          manages: []
        }
      ]
    },
    {
      name: 'Rey Hills',
      individualSales: 19,
      leadsInProgress: 5,
      manages: []
    }
  ]
};

const totalSales = employee => {
  let total = employee.individualSales;
  for (let el of employee.manages)
    total += totalSales(el);
  return total;
};

console.log(totalSales(salesTeam));
