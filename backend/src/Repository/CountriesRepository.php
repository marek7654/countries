<?php

namespace App\Repository;

use App\Entity\Countries;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class CountriesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Countries::class);
    }

    public function findAllCountries(): array
    {
        $qb = $this->createQueryBuilder('c')
            ->select('c.countryName as name', 'c.countryId as id')
            ->getQuery();

        return $qb->getResult();
    }
}
