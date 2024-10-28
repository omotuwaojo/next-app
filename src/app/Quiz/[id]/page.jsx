"use client";

import { useParams } from 'next/navigation';

export default function QuizPage(){
    const params = useParams();
    const { id } = params;
    return(
        <section>
            <h1>Quiz :{id} </h1>
        </section>
    )
}