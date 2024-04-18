interface CardDocument {
  title: string;
  content: string;
}

export function Card(props: CardDocument) {
  return (
    <div className="rounded-lg border border-gray-200
     bg-white text-gray-950 shadow-sm dark:border-gray-800 
     dark:bg-gray-950 dark:text-gray-50">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              {props.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {props.content}
            </p>
          </div>
        </div>
  ) 
}
