import React from 'react'

type BadgeLabel = 'area' | 'population'

interface BadgeProps {
    color: string;
    label: string;
    value: number;
}

export const Badge = ({color, label, value}: BadgeProps) => {
    return (
        <p className={`p-2 badge ${color}`}>{label}: {value}</p>
    )
}
