<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CapitalsRepository")
 */
class Capitals
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $capitalId;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $capitalName;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Countries")
     * @ORM\JoinColumn(name="country_id", referencedColumnName="countryId")
     */
    private $country;

    /**
     * @ORM\Column(type="decimal", precision=8, scale=5)
     */
    private $latitude;

    /**
     * @ORM\Column(type="decimal", precision=8, scale=5)
     */
    private $longitude;
}
