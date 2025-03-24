import {
Card,
CardContent,
CardHeader,
CardTitle,
} from "@/components/ui/card"

export interface card{
  id ?: number;
  userId?: number;
  title: string;
  body: string;
}
export default function card({title , body}:card){
  return (
    <div>
    <Card className="w-full h-full border-2 border-black border-solid">
      <CardHeader>
        <CardTitle className='p-1'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {body}
      </CardContent> 
    </Card>
    </div>
  )
}
