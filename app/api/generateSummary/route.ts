import openai from '@/openai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {
  // todos in the body of the post req
  const { todos } = await request.json();
  console.log(todos);

  // communicate with openAI GPT
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: 'system',
        content:
          'When responding, welcome user always as Mr. or Ms. Awesome and say welcome to the Trello 2.0 App!',
      },
      {
        role: 'user',
        content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To Do, In Progress, and Done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(
          todos
        )}`,
      },
    ],
  });

  console.log(response);

  const { data } = response;

  return NextResponse.json(data.choices[0].message);
}
