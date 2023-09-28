<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\CountriesRepository;
use Doctrine\ORM\EntityManagerInterface;

#[Route('/api', name: 'api_')]
class CountriesController extends AbstractController
{

    #[Route('/countries', name: 'countries_list', methods:['get'] )]
    public function listCountries(CountriesRepository $countriesRepository): JsonResponse
    {
        $countries = $countriesRepository->findAllCountries();
   
        return $this->json($countries);
    }

    #[Route('/countries/{id}', name: 'country_details', methods:['get'] )]
    public function showCountryDetails(int $id, EntityManagerInterface $entityManager): JsonResponse
    {
        $conn = $entityManager->getConnection();
        
        $sql = '
            SELECT * FROM country_details
            WHERE country_id = :id
            ';

        $resultSet = $conn->executeQuery($sql, ['id' => $id]);
        $result = $resultSet->fetchAssociative();

        if (!$result) {
            throw $this->createNotFoundException('Kraj o podanym ID nie został znaleziony');
        }
   
        return $this->json($result);
    }
 
}
