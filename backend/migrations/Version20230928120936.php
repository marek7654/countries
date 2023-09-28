<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230928120936 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE capitals DROP FOREIGN KEY capitals_ibfk_1');
        $this->addSql('ALTER TABLE capitals DROP FOREIGN KEY capitals_ibfk_1');
        $this->addSql('ALTER TABLE capitals CHANGE latitude latitude NUMERIC(8, 5) NOT NULL, CHANGE longitude longitude NUMERIC(8, 5) NOT NULL');
        $this->addSql('ALTER TABLE capitals ADD CONSTRAINT FK_248BB56CF92F3E70 FOREIGN KEY (country_id) REFERENCES countries (countryId)');
        $this->addSql('DROP INDEX country_id ON capitals');
        $this->addSql('CREATE INDEX IDX_248BB56CF92F3E70 ON capitals (country_id)');
        $this->addSql('ALTER TABLE capitals ADD CONSTRAINT capitals_ibfk_1 FOREIGN KEY (country_id) REFERENCES countries (country_id)');
        $this->addSql('ALTER TABLE countries DROP FOREIGN KEY countries_ibfk_1');
        $this->addSql('ALTER TABLE countries DROP FOREIGN KEY countries_ibfk_1');
        $this->addSql('ALTER TABLE countries ADD CONSTRAINT FK_5D66EBAD921F4C77 FOREIGN KEY (continent_id) REFERENCES continents (continentId)');
        $this->addSql('DROP INDEX continent_id ON countries');
        $this->addSql('CREATE INDEX IDX_5D66EBAD921F4C77 ON countries (continent_id)');
        $this->addSql('ALTER TABLE countries ADD CONSTRAINT countries_ibfk_1 FOREIGN KEY (continent_id) REFERENCES continents (continent_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE capitals DROP FOREIGN KEY FK_248BB56CF92F3E70');
        $this->addSql('ALTER TABLE capitals DROP FOREIGN KEY FK_248BB56CF92F3E70');
        $this->addSql('ALTER TABLE capitals CHANGE latitude latitude NUMERIC(8, 5) DEFAULT NULL, CHANGE longitude longitude NUMERIC(8, 5) DEFAULT NULL');
        $this->addSql('ALTER TABLE capitals ADD CONSTRAINT capitals_ibfk_1 FOREIGN KEY (country_id) REFERENCES countries (country_id)');
        $this->addSql('DROP INDEX idx_248bb56cf92f3e70 ON capitals');
        $this->addSql('CREATE INDEX country_id ON capitals (country_id)');
        $this->addSql('ALTER TABLE capitals ADD CONSTRAINT FK_248BB56CF92F3E70 FOREIGN KEY (country_id) REFERENCES countries (countryId)');
        $this->addSql('ALTER TABLE countries DROP FOREIGN KEY FK_5D66EBAD921F4C77');
        $this->addSql('ALTER TABLE countries DROP FOREIGN KEY FK_5D66EBAD921F4C77');
        $this->addSql('ALTER TABLE countries ADD CONSTRAINT countries_ibfk_1 FOREIGN KEY (continent_id) REFERENCES continents (continent_id)');
        $this->addSql('DROP INDEX idx_5d66ebad921f4c77 ON countries');
        $this->addSql('CREATE INDEX continent_id ON countries (continent_id)');
        $this->addSql('ALTER TABLE countries ADD CONSTRAINT FK_5D66EBAD921F4C77 FOREIGN KEY (continent_id) REFERENCES continents (continentId)');
    }
}
