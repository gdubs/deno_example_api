import { Expense } from "../domain/types.ts";

const expenses: Expense[] = [
  {
    id: 1,
    name: "Expense 1",
    amount: 100,
    currency: "USD",
    create_at: new Date("2020-05-15"),
  },
  {
    id: 2,
    name: "Expense 2",
    amount: 20,
    currency: "USD",
    create_at: new Date("2020-05-21"),
  },
  {
    id: 3,
    name: "Expense 1",
    amount: 10,
    currency: "USD",
    create_at: new Date("2020-06-01"),
  },
];

const getExpenses = ({ response }: { response: any }) => {
  response.body = {
    data: {
      expenses: expenses,
      page: 1,
      pageSize: 15,
      totalPages: 1,
    },
  };
};

const getExpense = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const expense: Expense | undefined = expenses.find((e) => {
    return e.id === parseInt(params.id);
  });

  response.body = {
    data: expense,
  };
};

const addExpense = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      data: {
        message: "Invalid request",
      },
    };
  } else {
    const newExpense: Expense = body.value;
    newExpense.id = 191919;
    expenses.push(newExpense);

    response.body = {
      data: {
        expense: newExpense,
      },
    };
  }
};

export { getExpenses, getExpense, addExpense };
