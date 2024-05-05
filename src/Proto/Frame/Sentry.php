<?php

declare(strict_types=1);

namespace Buggregator\Trap\Proto\Frame;

use Buggregator\Trap\Proto\Frame;
use Buggregator\Trap\Proto\Frame\Sentry\SentryEnvelope;
use Buggregator\Trap\Proto\Frame\Sentry\SentryStore;
use DateTimeImmutable;

/**
 * @internal
 * @psalm-internal Buggregator
 *
 * @psalm-import-type SentryStoreMessage from Sentry\SentryStore
 * @psalm-import-type SentryEnvelopeMessage from Sentry\SentryEnvelope
 */
abstract class Sentry extends Frame
{
    /**
     * @psalm-suppress MoreSpecificReturnType
     */
    public static function fromString(string $payload, DateTimeImmutable $time): static
    {
        /** @var array{type: string, ...mixed} $data */
        $data = \json_decode($payload, true, 512, JSON_THROW_ON_ERROR);

        /** @psalm-suppress LessSpecificReturnStatement, InvalidArgument */
        return match ($data['type']) {
            SentryEnvelope::SENTRY_FRAME_TYPE => SentryEnvelope::fromArray($data, $time),
            SentryStore::SENTRY_FRAME_TYPE => SentryStore::fromArray($data, $time),
            default => throw new \InvalidArgumentException('Unknown Sentry frame type.'),
        };
    }
}
