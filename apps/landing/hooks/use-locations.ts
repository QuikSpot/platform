'use client';

import { useEffect, useState } from 'react';

export interface Province {
  id: string;
  name: string;
}

export interface District {
  id: string;
  name: string;
}

export interface Zone {
  id: string;
  zone_name: string;
}

interface UseLocationsReturn {
  provinces: Province[];
  districts: District[];
  zones: Zone[];
  provincesLoading: boolean;
  districtsLoading: boolean;
  zonesLoading: boolean;
  locationsError: string | null;
}

export function useLocations(
  selectedProvinceName: string,
  selectedDistrictName: string,
): UseLocationsReturn {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [zones, setZones] = useState<Zone[]>([]);
  const [provincesLoading, setProvincesLoading] = useState(true);
  const [districtsLoading, setDistrictsLoading] = useState(false);
  const [zonesLoading, setZonesLoading] = useState(false);
  const [locationsError, setLocationsError] = useState<string | null>(null);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    setProvincesLoading(true);
    fetch(`${backendUrl}/api/v1/locations/provinces`)
      .then((r) => r.json())
      .then((body) => setProvinces(body.data ?? []))
      .catch(() => setLocationsError('Failed to load provinces'))
      .finally(() => setProvincesLoading(false));
  }, [backendUrl]);

  useEffect(() => {
    if (!selectedProvinceName) {
      setDistricts([]);
      setZones([]);
      return;
    }
    const province = provinces.find((p) => p.name === selectedProvinceName);
    if (!province) return;

    setDistrictsLoading(true);
    setDistricts([]);
    setZones([]);
    fetch(`${backendUrl}/api/v1/locations/provinces/${province.id}/districts`)
      .then((r) => r.json())
      .then((body) => setDistricts(body.data ?? []))
      .catch(() => setLocationsError('Failed to load districts'))
      .finally(() => setDistrictsLoading(false));
  }, [selectedProvinceName, provinces, backendUrl]);

  useEffect(() => {
    if (!selectedDistrictName) {
      setZones([]);
      return;
    }
    const district = districts.find((d) => d.name === selectedDistrictName);
    if (!district) return;

    setZonesLoading(true);
    setZones([]);
    fetch(`${backendUrl}/api/v1/locations/districts/${district.id}/zones`)
      .then((r) => r.json())
      .then((body) => setZones(body.data ?? []))
      .catch(() => setLocationsError('Failed to load service zones'))
      .finally(() => setZonesLoading(false));
  }, [selectedDistrictName, districts, backendUrl]);

  return {
    provinces,
    districts,
    zones,
    provincesLoading,
    districtsLoading,
    zonesLoading,
    locationsError,
  };
}
